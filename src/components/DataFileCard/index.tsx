
import * as React from 'react';
import styles from './style.css';
import { CloudDownload as Download } from '@material-ui/icons';
import { Fab } from '@material-ui/core';
import { comicApi } from '../../services/comicApi';
import { IDataset } from '../../types';
import Spinner from '../../components/Spinner';

interface IState {
    data: IDataset | null;
}
interface IProps {
    datasetId: string;
}
class DataFileCard extends React.Component<IProps, IState> {
    state = {
        data: null,
    };
    async componentDidMount() {

        const { datasetId } = this.props;
        this.setState({
            data: await comicApi.dataset(datasetId),
        });

    }

    render() {
        const datasetCard = (
            <>
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
                <p>
                    Filterbank format: Standard radio astronomical data format, consisting of a real
                    frequency/time intensity array. Data should be 8bit with correct header information.
                    Filterbank files will have a simulated Gaussian noise background
                </p>
            </>
        );
        const { data } = this.state;
        const content = data ? (
            <>
                <div className={styles.header}>
                    <h5>Benchmark Specific Dataset</h5>
                    <div className={styles.iconsContainer}>
                        <Fab size="small">
                            {/* // href={data.test_data_file} */}
                            <Download />
                        </Fab>
                        {data.DOI ? (
                            <Fab size="small" >
                                DOI
                            </Fab>
                        ) : null
                        }

                    </div>
                </div>
                <p>
                    {data.short_description}
                </p>
            </>
        ) : (
                <Spinner />
            );
        return (
            <div className={styles.container}>
                {content}
            </div>
        );
    }
}

export default DataFileCard;
