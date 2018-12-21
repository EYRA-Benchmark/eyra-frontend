import { AxiosResponse } from "axios";
import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import AnimateComponent from "../../components/common/Animation/AnimateComponent";
import axios from "../../components/common/API/SetUpAxios";
import ChallengesGrid from "../../components/common/CardGrid/CardGrid";
// import ChallengeDetails from "./ChallengeDetails/ChallengeDetails";

// function challenges() {
//   return (
//     <div>
//       <ChallengesGrid />
//     </div>
//   );
// }

interface IState {
  challengesData: any;
  selectedItem: any;
}

class Challenges extends React.Component<RouteComponentProps<{}>, IState> {
  state = {
    challengesData: null,
    selectedItem: null
  };

  shouldComponentUpdate(nextProps: any, nextState: any) {
    console.log(this.state + "and\n" + nextState);
    console.log(this.state.challengesData !== nextState.challengesData);
    return this.state.challengesData !== nextState.challengesData;
  }
  componentDidMount() {
    axios.get("/posts").then((response: AxiosResponse) => {
      this.setState({ challengesData: response.data });
    });
  }
  public handleSelection = (selectedItem: any) => {
    this.showDetails(selectedItem);
  };
  public showDetails = (item: any) => {
    this.setState({ selectedItem: item }, () => {
      this.props.history.push({
        pathname: "/challenge_details",
        state: { selectedItem: this.state.selectedItem }
      });
    });
  };
  public render() {
    if (this.state.challengesData) {
      return (
        <React.Fragment>
          <ChallengesGrid data={this.state.challengesData} />
        </React.Fragment>
      );
    }
    return <div />;
  }
}
export default AnimateComponent(Challenges);
