import { Button, Checkbox, Divider, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

const headCells = [
    {
      id: '0',
      disablePadding: true,
      label: 'Name',
    },
    {
        id: '1',
        disablePadding: true,
        label: 'Trader Name',
    },
    {
        id: '2',
        disablePadding: true,
        label: 'Trader Email',
    },
    {
        id: '3',
        disablePadding: true,
        label: 'Status',
    },
    {
        id: '4',
        disablePadding: true,
        label: 'Maturity Date',
    },
    {
        id: '5',
        disablePadding: true,
        label: 'Actions'
    }
]

const EnhancedTableHead = (props) => {
    const { onSelectAllClick, setNameOrderSort, nameOrderSort } = props;
  return (
    <TableHead
        sx={{
            fontWeight: 'bold'
        }}
    >
        <TableRow
            sx={{
                backgroundColor: 'rgb(244, 253, 252)'
            }}
        >
            <TableCell padding="checkbox">
                <Checkbox
                    color="primary"
                    // indeterminate={numSelected > 0 && numSelected < rowCount}
                    // checked={rowCount > 0 && numSelected === rowCount}
                    onChange={onSelectAllClick}
                    // inputProps={{
                    //     'aria-label': 'select all tasks',
                    // }}
                />
            </TableCell>
            {
                headCells.map((headCell) => (
                    <>
                        <TableCell
                            key={headCell?.id}
                            align={'left'}
                        >
                            {
                                (headCell?.label === 'Name' || headCell?.label === 'Status') ? (
                                    <>
                                        {headCell?.label}
                                        <Button
                                            onClick={() => {nameOrderSort === 'asc' ? setNameOrderSort('dsc') : setNameOrderSort('asc') }}
                                            variant='text'
                                            sx={{
                                                color: 'black',
                                                '&:hover': {
                                                    color: 'blue'
                                                }
                                            }}
                                            key={headCell?.id}
                                        >
                                            { 
                                                nameOrderSort === 'asc' ? <ArrowUpwardIcon key={headCell?.id} /> : <ArrowDownwardIcon key={headCell?.id} />
                                            }
                                        </Button>
                                    </>
                                ) : headCell?.label
                            }
                        </TableCell>
                    </>
                ))
            }
            {

            }
        </TableRow>
    </TableHead>
  )
}

export default EnhancedTableHead