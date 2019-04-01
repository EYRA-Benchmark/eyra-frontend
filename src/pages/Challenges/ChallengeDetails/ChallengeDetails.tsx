import * as React from "react";
import { comicApi } from '../../../services/comicApi';

import { RouteComponentProps } from "react-router";
import AnimateComponent from "../../../components/Animation/AnimateComponent";
import Details from "./DetailsLayout/DetailsLayout";

interface IState {
  selectedItemId: string;
  loading: boolean;
  challengesData: any;
}

class ChallengeDetails extends React.Component<RouteComponentProps<{}>, IState> {
  componentWillMount() {
    this.setState({
      selectedItemId: this.props.location.state.selectedItem
    });
  }
  async componentDidMount() {
    this.setState({
      loading: false,
      challengesData: await comicApi.benchmark(this.state.selectedItemId),
    });
  }
  render() {
    console.log("data", this.state.challengesData);
    return <Details data={this.state.challengesData} />;
  }
}
export default AnimateComponent(ChallengeDetails);
