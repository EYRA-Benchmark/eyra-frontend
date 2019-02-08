import { AxiosResponse } from "axios";
import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import AnimateComponent from "../../components/Animation/AnimateComponent";
import ChallengesGrid from "../../components/CardGrid/CardGrid";
import Spinner from "../../components/Utils/Spinner/Spinner";
import axios from "../../services/SetUpAxios";

interface IState {
  challengesData: any;
  selectedItem: any;
  loading: boolean;
}

class Challenges extends React.Component<RouteComponentProps<{}>, IState> {
  state = {
    challengesData: null,
    selectedItem: null,
    loading: true
  };

  shouldComponentUpdate(nextProps: any, nextState: any) {
    return this.state.challengesData !== nextState.challengesData;
  }
  componentDidMount() {
    axios.get("challenges/").then((response: AxiosResponse) => {
      debugger;
      this.setState({
        loading: false,
        challengesData: response.data
      });
    });
  }
  public handleSelection = (selectedItem: any) => {
    // this.showDetails(selectedItem);
  };
  public showDetails = () => {
    this.props.history.push({
      pathname: "challenge_details",
      state: { selectedItem: this.state.selectedItem }
    });
  };
  public render() {
    let content = null;
    if (this.state.loading) {
      content = <Spinner />;
    } else {
      content = (
        <ChallengesGrid
          data={this.state.challengesData}
          clicked={this.showDetails}
        />
      );
    }
    return content;
  }
}
export default AnimateComponent(Challenges);
