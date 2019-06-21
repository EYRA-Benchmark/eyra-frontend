
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
            <p>
                <span>Sampling Method:  </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div style={tableContainer}>
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
            </div>
        </>

    );
};

export default FilesDetailsTable;
