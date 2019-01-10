import * as React from "react";
import { RouteComponentProps } from "react-router";

class NewsDetails extends React.Component<RouteComponentProps<{}>, {}> {
  render() {
    debugger;
    const selectedItem = localStorage.getItem("NewsData");

    return <div>{selectedItem}</div>;
  }
}
export default NewsDetails;
