import React from 'react';
import { comicApi } from 'src/services/comicApi';

// import Spinner from 'src/components/Spinner/index';

import { UUID4 } from 'src/types';

interface IProps {
  jobID: UUID4;
}

interface IState {
  loading: boolean;
  log: string;
}

class JobLog extends React.Component<IProps, IState> {
  state = {
    loading: true,
    log: '',
  };
  interval: any;

  update = async () => {
    // this.setState({ loading: true }); // causes flicker on state update
    const job = await comicApi.job(this.props.jobID);
    this.setState({ log: job.log });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.update(), 5000);
    this.update();
  }

  async componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <pre>
        {this.state.log}
        {/* {this.state.loading && <Spinner />} */}
      </pre>
    );
  }

}
export default JobLog;
