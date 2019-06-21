
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';
import FileRow from './FileDetailsRow';

interface IProps {
    dataFiles: [string];
}
const FilesDetailsTable = (props: IProps) => {
    const { dataFiles } = props;
    const tableContainer = {
        maxHeight: 300,
        overflow: 'scroll',
    };
    return (
        <>
            {/* <div style={tableContainer}> */}
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Size</TableCell>
                        <TableCell>Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataFiles.map((fileId) => <FileRow dataFileId={fileId} key={fileId} />)}
                </TableBody>
            </Table>
            {/* </div> */}
        </>

    );
};

export default FilesDetailsTable;
