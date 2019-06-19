import React, { useState, useEffect } from 'react';
import { comicApi } from '../../services/comicApi';
import { IDataset } from '../../../types';
import DataFileCard from './DataFileCard';
import { Grid } from '@material-ui/core';
interface IProps {
    datasetId: string;
}

const DataDescription = (props: IProps) => {
    const [data, setData] = useState<IDataset>(null);
    const { datasetId } = props;
    const content = [];
    const controller = new AbortController();
    async function fetchData() {
        const response = await comicApi.dataset(datasetId);
        setData(response);

    }
    useEffect(
        () => {
            fetchData();
            return () => {
                controller.abort();
            };
        }, [datasetId],
    );
    if (data) {
        // data.test_data_file &&
        //     content.push(<DataFileCard dataFileId={data.test_data_file} type={'Public Leaderboard Data'} />);
        data.additional_data_files.length > 0
            &&
            content.push(<>
                <Grid item={true} key={1} xs={12} sm={6} md={6}>
                    <DataFileCard dataFiles={data.additional_data_files} type={'Public Data'} />
                </Grid>
                <Grid item={true} key={2} xs={12} sm={6} md={6}>
                    <DataFileCard dataFiles={data.additional_data_files} type={'Public Data'} />
                </Grid>
            </>);

    }
    return (
        <Grid container={true} spacing={10}>
            {content}
        </Grid>
    );
};

export default DataDescription;
