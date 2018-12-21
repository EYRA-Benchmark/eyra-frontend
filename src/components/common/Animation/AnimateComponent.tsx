import classNames from "classnames";
import * as React from "react";
import * as styles from "./AnimateComponent.css";
const animate = <P extends object>(WrappedComponent: React.ComponentType<P>) =>
  class WithAnimation extends React.Component<P> {
    state = { didMount: false };
    componentDidMount() {
      setTimeout(() => {
        this.setState({ didMount: true });
      }, 0);
    }
    render() {
      const { didMount } = this.state;

      return (
        <div className={classNames(styles.fadein, didMount && styles.visible)}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };

export default animate;
