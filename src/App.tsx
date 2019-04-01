import * as React from 'react';
import Theme from '../src/Theme/Theme';
import Layout from './Layout/Layout';

class App extends React.Component {
  public render() {
    return <Layout />;
  }
}

export default Theme(App);
