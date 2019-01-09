import * as React from "react";
import { RouteComponentProps } from "react-router";
import AnimateComponent from "../../../components/Animation/AnimateComponent";
import Details from "../../../Layout/DetailsLayout/DetailsLayout";

class ChallengDetails extends React.Component<RouteComponentProps<{}>, {}> {
  render() {
    // const selctedItem = this.props.location.state.selectedItem;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "500px",
          margin: "150px 100px 50px"
        }}
      >
        <Details />
      </div>
    );
  }
}
export default AnimateComponent(ChallengDetails);
