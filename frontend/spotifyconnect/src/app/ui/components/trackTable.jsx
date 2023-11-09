'use client';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';


const headCells = [
    {
        id: 'id',
        numeric: false,
        disablePadding: false,
        label: '#'
    }, 
    {
        id: 'images',
        numeric: false,
        disablePadding: false,
        label: ''
    },
    {
        id: "track_name",
        numeric: false,
        disablePadding: false,
        label: "Title"
    },
    {
        id: 'track_artist',
        numeric: false,
        disablePadding: false,
        label: 'Artist(s)'
    },
    {
        id: 'track_album',
        numeric: false,
        disablePadding: false,
        label: 'Album'
    },
    {
        id: 'added_at',
        numeric: false,
        disablePadding: false,
        label: 'Date Added'
    },
    {
        id: 'track_duration',
        numeric: false,
        disablePadding: false,
        label: 'Duration'
    }
]
const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    } 
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

const getComparator = (order, orderBy) => {
    return order === 'desc' 
        ? (a, b) => descendingComparator(a, b, orderBy) 
        : (a, b) => -descendingComparator(a, b, orderBy)
}

const convertToMinutes = (ms) => {
    let min = Math.round((ms / 1000) / 60);
    let seconds = Math.round((ms / 1000) % 60);
    return `${min}m ${seconds}s`;
}

const convertToDate = (dateString) => {
  return dateString.split("T")[0]
}

const EnhancedTableHead = (props) => {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort} = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" className='border-trackText'>
              <Checkbox
                color="primary"
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
                inputProps={{
                  'aria-label': 'select all tracks',
                }}
                className="text-trackText"
              />
            </TableCell>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                align={headCell.numeric ? 'right' : 'left'}
                padding={headCell.disablePadding ? 'none' : 'normal'}
                sortDirection={orderBy === headCell.id ? order : false}
                className="text-trackText border-trackText"
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : 'asc'}
                  onClick={createSortHandler(headCell.id)}
                >
                  {headCell.label}
                  {orderBy === headCell.id ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
      );
}
EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
    sx: PropTypes.any
};

const TrackTable = ({rows}) => {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('title');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
        console.log(order)
        console.log(orderBy)
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
          const newSelected = rows.map((n) => n.id);
          setSelected(newSelected);
          return;
        }
        setSelected([]);
      };
    
      const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        console.log(selectedIndex)
        let newSelected = [];
    
        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
          );
        }
        setSelected(newSelected);
      };
    
      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
    
      const isSelected = (id) => selected.indexOf(id) !== -1;
    
      // Avoid a layout jump when reaching the last page with empty rows.
      const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    
      const visibleRows = React.useMemo(
        () => rows.slice().sort(getComparator(order, orderBy)), 
      [order, orderBy, page, rowsPerPage]);

    return ( 
        <Box sx={{ width: '95%', ml:4}}>
            <Paper sx={{ width: '100%', mb: 2 }} className='bg-transparent'>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                       
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody >
                            {visibleRows.map((row, index) => {
                                const isItemSelected = isSelected(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;
                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.id)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
                                        sx={{ cursor: 'pointer'}}
                                        className='border-0'
                                        
                                    >
                                        <TableCell padding="checkbox"  className='border-0'>
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                                className="text-trackText border-0"
                                            />
                                        </TableCell>
                                        <TableCell className="text-trackText w-16 border-0" align='left' id={labelId}>{row.id}</TableCell>
                                        <TableCell className='flex w-16 border-0'>
                                            <img src={row.images.url} className='w-8 h-8'/>
                                        </TableCell>
                                        <TableCell className="text-trackText border-0" align='left'>{row.track_name}</TableCell>
                                        <TableCell className="text-trackText border-0" align="left">{row.track_artist}</TableCell>
                                        <TableCell className="text-trackText border-0" align="left">{row.track_album}</TableCell>
                                        <TableCell className="text-trackText border-0" align="left">{convertToDate(row.added_at)}</TableCell>
                                        <TableCell className="text-trackText border-0" align="left">{convertToMinutes(row.track_duration)}</TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: 55 * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    className="text-trackText"
                /> */}
            </Paper>
        </Box>
  );
}
 
export default TrackTable;