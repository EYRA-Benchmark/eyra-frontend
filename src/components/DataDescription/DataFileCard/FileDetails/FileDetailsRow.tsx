import { useState, useEffect } from 'react';
import { comicApi } from '../../../../services/comicApi';
import { IDataFile } from '../../../../types';
import Spinner from '../../../Spinner';
import { formatDateTime } from 'src/utils';
import {
    TableCell,
    TableRow,
} from '@material-ui/core';
interface IProps {
    dataFileId: string;

}

const FileDetailsRow = (props: IProps) => {
    const [data, setData] = useState<IDataFile>(null);
    const { dataFileId } = props;
    const controller = new AbortController();
    async function fetchData() {
        const response = await comicApi.data_file(dataFileId);
        setData(response);
    }
    useEffect(
        () => {
            fetchData();
            return () => {
                controller.abort();
            };
        }, [dataFileId],
    );

    const content = data ? (

        <>
            <TableRow hover={true} tabIndex={-1} key={dataFileId}>
                <TableCell>
                    <a href={data.file} download={true} title="download">{data.name}</a></TableCell>
                <TableCell>{data.size || '-'}</TableCell>
                <TableCell>{formatDateTime(new Date(data.created))}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan={3}>
                    <p><span>Description:  </span>{data.long_description}</p>
                </TableCell>
            </TableRow>
        </>
    ) : <Spinner />;
    return content;
};

export default FileDetailsRow;
