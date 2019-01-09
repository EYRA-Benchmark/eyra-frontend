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
    console.log(this.state + "and\n" + nextState);
    console.log(this.state.challengesData !== nextState.challengesData);
    return this.state.challengesData !== nextState.challengesData;
  }
  componentDidMount() {
    axios.get("/posts").then((response: AxiosResponse) => {
      this.setState({
        loading: false,
        challengesData: response.data
      });
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
    let content = null;
    if (this.state.loading) {
      content = <Spinner />;
    } else {
      content = <ChallengesGrid data={this.state.challengesData} />;
    }
    return content;
  }
}
export default AnimateComponent(Challenges);
