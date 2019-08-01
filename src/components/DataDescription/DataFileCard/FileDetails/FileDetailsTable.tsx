
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';
import FileRow from './FileDetailsRow';

interface IProps {
    dataFiles: string[];
}
const FilesDetailsTable = (props: IProps) => {
    const { dataFiles } = props;
    return (
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
    );
};

export default FilesDetailsTable;
