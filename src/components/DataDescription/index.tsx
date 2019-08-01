import React, { useState, useEffect } from 'react';
import { comicApi } from '../../services/comicApi';
import { IDataset } from '../../types/';
import DataFileCard from './DataFileCard';
import { Grid } from '@material-ui/core';
interface IProps {
    datasetId: string;
}

const DataDescription = (props: IProps) => {
    const [data, setData] = useState<IDataset>();
    const { datasetId } = props;
    const publicLbData: string[] = [];
    const privateLbData: string[] = [];
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
        if (data.public_test_data_file && publicLbData.push(data.public_test_data_file),
            data.public_ground_truth_data_file && publicLbData.push(data.public_ground_truth_data_file)) {
            content.push(
                (
                    <Grid item={true} key={1} xs={12} sm={6} md={6}>
                        <DataFileCard
                            dataFiles={publicLbData}
                            type={'Public Leaderboard Data'}
                            desc={data.public_test_data_description}
                            sampling={data.public_test_data_sampling_method}
                        />
                    </Grid>
                ),
            );
        }
        if (data.private_test_data_file && privateLbData.push(data.private_test_data_file),
            data.private_ground_truth_data_file && privateLbData.push(data.private_ground_truth_data_file)) {
            content.push(
                (
                    <Grid item={true} key={2} xs={12} sm={6} md={6}>
                        <DataFileCard
                            dataFiles={publicLbData}
                            type={'Private Leaderboard Data'}
                            desc={data.private_test_data_description}
                            sampling={data.private_test_data_sampling_method}
                        />
                    </Grid>
                ),
            );
        }
        if (data.participant_data_files.length > 0) {
            content.push(
                (
                    <Grid item={true} key={3} xs={12} sm={6} md={6}>
                        <DataFileCard
                            dataFiles={data.participant_data_files}
                            type={'Public Participant Data'}
                            desc={data.participant_data_description}
                            sampling={data.participant_data_sampling_method}
                        />
                    </Grid>
                ),
            );
        }
    }
    return (
        <Grid container={true} spacing={10}>
            {content.length > 0 ? content : null}
        </Grid>
    );

};

export default DataDescription;
