import {
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
    Tooltip,
} from '@material-ui/core';
import * as React from 'react';
interface IProps {
    onRequestSort: (event: any, property: any) => void;
    order: any;
    orderBy: string;
}
class SubmissionHeader extends React.Component<IProps, {}> {
    createSortHandler = (property: any) => (event: any) => {
        this.props.onRequestSort(event, property);
    }
    render() {
        const rows = [
            {
                id: 'benchmark',
                numeric: false,
                disablePadding: false,
                label: 'Benchmark',
                sortable: true,
            },
            {
                id: 'started',
                numeric: false,
                disablePadding: false,
                label: 'Started',
                sortable: true,
            },
            { id: 'name', numeric: false, disablePadding: false, label: 'Name', sortable: true },
            {
                id: 'implementation_status',
                numeric: false,
                disablePadding: false,
                label: 'Status(impl.)', sortable: false,
            },
            {
                id: 'runtime_implementation',
                numeric: false,
                disablePadding: false,
                label: 'Run time(impl.)',
                sortable: true,
            },
            {
                id: 'evaluation_status',
                numeric: false,
                disablePadding: false, label: 'Status(eval.)',
                sortable: false,
            },
            {
                id: 'runtime_evaluation',
                numeric: false,
                disablePadding: false,
                label: 'Run time(eval.)',
                sortable: true,
            },
            { id: 'action', numeric: false, disablePadding: false, label: 'Actions', sortable: false },
        ];

        const { order, orderBy } = this.props;

        return (
            <TableHead>
                <TableRow>
                    {rows.map((row) => {
                        return (
                            <TableCell
                                key={row.id}
                                align={'left'}
                                padding={row.disablePadding ? 'none' : 'default'}
                                sortDirection={orderBy === row.id ? order : false}
                            >
                                {row.sortable ?
                                    (<Tooltip
                                        title="Sort"
                                        placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                                        enterDelay={300}
                                    >
                                        <TableSortLabel
                                            active={orderBy === row.id}
                                            direction={order}
                                            onClick={this.createSortHandler(row.id)}
                                        >
                                            {row.label}
                                        </TableSortLabel>
                                    </Tooltip>) : row.label
                                }

                            </TableCell>
                        );
                    }, this)}
                </TableRow>
            </TableHead>
        );
    }
}

export default SubmissionHeader;
