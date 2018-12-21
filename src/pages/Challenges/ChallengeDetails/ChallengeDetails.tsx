import * as React from "react";
import { RouteComponentProps } from "react-router";
import AnimateComponent from "../../../components/common/Animation/AnimateComponent";
class ChallengDetails extends React.Component<RouteComponentProps<{}>, {}> {
  render() {
    const selctedItem = this.props.location.state.selectedItem;
    return <div>{selctedItem.title}</div>;
  }
}
export default AnimateComponent(ChallengDetails);
