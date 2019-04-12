import React from "react";
import { comicApi } from "src/services/comicApi";
import Spinner from "src/components/Spinner/index";
class Logs extends React.Component {
  state = {
    logs: null,
  };

  shouldComponentUpdate(nextProps: any, nextState: any) {
    return this.state.logs !== nextState.logs;
  }

  async componentDidMount() {
    this.setState({
      logs: await comicApi.jobs(),
    });
  }
  private getContent() {
    if (this.state.logs === null) {
      return <Spinner />;
    } else {
      console.log(new Date("2019-04-11T11:29:52.603845Z").toUTCString);
      return null;
    }
  }
  render() {
    return this.getContent();
  }
}
export default Logs;
