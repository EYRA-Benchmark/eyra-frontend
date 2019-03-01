import { AxiosResponse } from "axios";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
// import AnimateComponent from "../../components/Animation/AnimateComponent";
import Spinner from "../../components/Utils/Spinner/Spinner";
import axios from "../../services/SetUpAxios";
import ChallengesGrid from "./CardGrid/CardGrid";

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
    axios.get("benchmarks/").then((response: AxiosResponse) => {
      this.setState({
        loading: false,
        challengesData: response.data
      });
    });
  }
  public showDetails = (selectedItem: string) => {
    this.props.history.push({
      pathname: "benchmark_details",
      state: { selectedItem }
    });
  };
  public render() {
    let content = null;
    if (this.state.loading) {
      content = <Spinner />;
    } else {
      content = (
        <ChallengesGrid
          size={0}
          data={this.state.challengesData}
          clicked={this.showDetails}
        />
      );
    }
    return content;
  }
}
export default withRouter(Challenges);
