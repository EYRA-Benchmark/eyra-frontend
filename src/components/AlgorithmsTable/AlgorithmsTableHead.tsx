import {
    TableCell,
    TableRow,
    TableHead,
    TableSortLabel,
} from '@material-ui/core';

type Order = 'asc' | 'desc';

interface ITableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: any) => void;
    order: Order;
    orderBy: string;
}

function AlgorithmsTableHead(props: ITableProps) {
    const { order, orderBy, onRequestSort } = props;

    const createSortHandler = (property: any) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };
    // Define Head Cells
    const tableHeaders = [
        { id: 'created', numeric: false, label: 'Created' },
        { id: 'name', numeric: false, label: 'Name' },
        { id: 'edit', numeric: false, label: 'Edit' },
    ];
    return (
        <TableHead>
            <TableRow>
                {tableHeaders.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={order}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export default AlgorithmsTableHead;
