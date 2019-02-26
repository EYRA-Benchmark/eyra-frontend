import { AxiosResponse } from "axios";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import AnimateComponent from "../../../components/Animation/AnimateComponent";
import axios from "../../../services/SetUpAxios";
import Details from "./DetailsLayout/DetailsLayout";
interface IState {
  selectedItemId: string;
  loading: boolean;
  challengesData: any;
}
class ChallengDetails extends React.Component<RouteComponentProps<{}>, IState> {
  componentWillMount() {
    this.setState({
      selectedItemId: this.props.location.state.selectedItem
    });
  }
  componentDidMount() {
    console.log(this.state.selectedItemId);
    axios
      .get("benchmarks/" + this.state.selectedItemId)
      .then((response: AxiosResponse) => {
        this.setState({
          loading: false,
          challengesData: response.data
        });
      });
  }
  render() {
    console.log("data", this.state.challengesData);
    return <Details data={this.state.challengesData} />;
  }
}
export default AnimateComponent(ChallengDetails);
