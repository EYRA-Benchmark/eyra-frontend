import * as React from "react";
import ExpansionContainer from "./ExpansionContainer/ExpansionContainer";
interface IProps {
  testDataSets: any[];
  trainingDataSets: any[];
}

class DataSets extends React.Component<IProps, {}> {
  render() {
    const { testDataSets, trainingDataSets } = this.props;
    return (
      <ExpansionContainer
        testDataSets={testDataSets}
        trainingDataSets={trainingDataSets}
      />
    );
  }
}
export default DataSets;
