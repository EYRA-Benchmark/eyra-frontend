import * as React from 'react';
// import { BrowserRouter } from "react-router-dom";
import Theme from '../src/Theme/Theme';
import Layout from './Layout/Layout';

class App extends React.Component {
  public render() {
    return <Layout />;
  }
}

export default Theme(App);
