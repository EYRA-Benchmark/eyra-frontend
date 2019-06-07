
import * as React from 'react';
import styles from './style.css';
import { CloudDownload as Download } from '@material-ui/icons';
import { Fab } from '@material-ui/core';
class DataFileCard extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <h5>Benchmark Specific Dataset</h5>
                    <div className={styles.iconsContainer}>
                    <Fab size="small">
                            <Download />
                            </Fab>
                        <Fab size="small">
                            DOI
                        </Fab>
                    </div>
                </div>
                <p>Filterbank format: Standard radio astronomical data format, consisting of a real frequency/time intensity array. Data should be 8bit with correct header information.

Filterbank files will have a simulated Gaussian noise background</p>
            </div>
        );
    }
}
export default DataFileCard;
