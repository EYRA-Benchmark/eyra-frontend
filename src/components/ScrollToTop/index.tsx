import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
interface IPathParamsType {
  location: string;
}
type IProps = RouteComponentProps<IPathParamsType>;
class ScrollToTop extends React.Component<IProps> {
  componentDidUpdate(prevProps: any) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return this.props.children;
  }
}
export default withRouter(ScrollToTop);
