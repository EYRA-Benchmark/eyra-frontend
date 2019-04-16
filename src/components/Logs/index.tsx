import React from "react";
import { comicApi } from "src/services/comicApi";
import Spinner from "src/components/Spinner/index";
import {
  Typography,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from "@material-ui/core";
import styles from "./Logs.module.css";
class Logs extends React.Component {
  state = {
    logs: null,
    jobs: [
      {
        id: "f4bd7b29-6d07-4107-aa97-7dd697b4c0d8",
        creator: 10,
        created: "2019-04-04T14:57:41.253723Z",
        modified: "2019-04-04T14:57:41.386793Z",
        short_description: "",
        description: "",
        name: "Toms Beaama",
        evaluator: null,
        training_data_file: null,
        training_ground_truth_data_file: null,
        test_data_file: null,
        test_ground_truth_data_file: null,
        interface: null,
        admin_group: 8,
        permissions: ["change_benchmark"],
      },
    ],
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
    if (this.state.jobs === null) {
      return <Spinner />;
    } else {
      const job = this.state.jobs[0];
      const created = job.created;
      const modified = job.modified;
      const content = (
        <Typography component="div" className={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Created</TableCell>
                <TableCell>Modified</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{job.name}</TableCell>
                <TableCell>{new Date(created).toUTCString()}</TableCell>
                <TableCell>{new Date(modified).toUTCString()}</TableCell>
                <TableCell>{job.description}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Typography>
      );
      return content;
    }
  }
  render() {
    return this.getContent();
  }
}
export default Logs;
