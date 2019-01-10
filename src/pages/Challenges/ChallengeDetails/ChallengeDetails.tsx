import * as React from "react";
import { RouteComponentProps } from "react-router";
import AnimateComponent from "../../../components/Animation/AnimateComponent";
import Details from "../../../Layout/DetailsLayout/DetailsLayout";

class ChallengDetails extends React.Component<RouteComponentProps<{}>, {}> {
  render() {
    // const selctedItem = this.props.location.state.selectedItem;
    return <Details />;
  }
}
export default AnimateComponent(ChallengDetails);
