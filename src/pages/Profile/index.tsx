import * as React from 'react';
import { IUserProps, withUser } from 'src/context/User';
import { comicApi } from 'src/services/comicApi';
import { IBenchmark } from 'src/types';

interface IProps {
  submissions: ISubmission[];
}

const UserDetails = withUser((props) => <div>{JSON.stringify(props)}</div>);

class Profile extends React.Component<IProps & IUserProps> {
  static async getInitialProps(): Promise<IProps> {
    return {
      benchmarks: await comicApi.benchmarks(),
    };
  }

  public render() {
    // const { title, desc } = this.props;
    return (
      <div>
        <UserDetails />
        { JSON.stringify(this.props)}
      </div>
    );
  }
}

export default Profile;
