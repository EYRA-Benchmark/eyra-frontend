import React, { Component } from 'react';
import { UUID4 } from 'src/types';
import { Typography } from '@material-ui/core';

interface IProps {
  isNotebook: boolean;
  observableUrl?: string;
  jobId: UUID4 | null;
}

interface IState {
  notebook: any;
}
class Observable extends Component<IProps, IState> {
  getNotebookUrl() {
    let notebookUrl = this.props.observableUrl;
    notebookUrl = notebookUrl!.replace(
      'https://observablehq.com/',
      'https://api.observablehq.com/',
    );
    notebookUrl = notebookUrl.split('?')[0] + '.js?v=3';
    return notebookUrl;
  }
  componentDidMount() {
    const id = this.props.jobId;
    const isNotebook = this.props.isNotebook;
    const script = document.createElement('script');
    const notebookUrl = this.getNotebookUrl();
    script.type = 'module';
    script.innerHTML = `
        import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
        import notebook from "${notebookUrl}";
        if(${isNotebook}) {
            const renders = {
                "xAxisLabel":"x-label",
                "viewof axisX": "axisX",
                "yAxisLabel":"y-label",
                "viewof axisY": "axisY",
                "viewof dotSize": "dotSize",
                "chart": "chart",
                "note": "note",
                "viewof datatable": "datatable",
              };
              const main = new Runtime().module(notebook, (name) => {
                const selector = renders[name];
                if (selector) {
                  return new Inspector(document.getElementById(selector));
                }
              });
              main.redefine("job_Id", '${id}');
        }
        else {
            const main = new Runtime().module(notebook, name => {
                if (name === "chart") {
                    return new Inspector(document.getElementById('chart${id}'));
                } else if (name === "viewof dotSize") {
                    return new Inspector(document.getElementById('slider${id}'));
                }
            });
            main.redefine("job_Id", '${id}');
        }
        `;
    document.body.appendChild(script);
  }
  render() {
    const notebook = (
      <>
        <Typography component="p" align="right">
          <a href={this.props.observableUrl} target="_blank">
            Edit in Observable
          </a>
        </Typography>
        <div id="x-label" />
        <div id="axisX" />
        <div id="y-label" />
        <div id="axisY" />
        <div id="dotSize" />
        <div id="chart" />
        <p id="note" />
        <div id="datatable" />
      </>
    );
    const visualization = (
      <>
        <div id={'slider' + this.props.jobId} />
        <div id={'chart' + this.props.jobId} />
      </>
    );
    return this.props.isNotebook ? notebook : visualization;
  }
}

export default Observable;
