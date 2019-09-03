import React, { Component } from 'react';
import { UUID4 } from 'src/types';
interface IProps {
    isNotebook: boolean;
    jobId: UUID4 | null;
}

interface IState {
    notebook: any;
}
class Observable extends Component<IProps, IState> {
    componentDidMount() {
        const id = this.props.jobId;
        const isNotebook = this.props.isNotebook;
        const script = document.createElement('script');
        script.type = 'module';
        script.innerHTML = `
        import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
        import notebook from 'https://api.observablehq.com/@pushpanjalip/frb-detection-visualization-with-zoom.js?v=3';
        if(${isNotebook}) {
            const main = new Runtime().module(notebook, Inspector.into(document.getElementById('chart${id}')))
            main.redefine("job_Id",'${id}')
        }
        else {
            const main = new Runtime().module(notebook, name => {
            if (name === "chart") {
                return new Inspector(document.getElementById('chart${id}'));
            } else if (name === "viewof dotSize") {
                return new Inspector(document.getElementById('slider${id}'));
            }
        });
        main.redefine("job_Id",'${id}')
        }
        `;
        document.body.appendChild(script);
    }
    render() {

        return (
            <>
                <div id={'slider' + this.props.jobId} />
                <div id={'chart' + this.props.jobId} />
            </>
        );
    }
}

export default Observable;
