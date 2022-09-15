// import { Box, Paper, TableContainer, Table, TableBody } from '@mui/material'
// import React, { useState } from 'react'
// import EnhancedTableHead from './EnhancedTableHead'
// import TableToolbar from './TableToolbar'


// const datas = [
//     {
//         "name": "Annette Black",
//         "trader name":  "Binford Ltd.",
//         "trader email": "kepnac@wak.fi",
//         "status": "filled",
//         "maturity date": "20-05-2015"
//     },
//     {
//         "name": "Guy Hawkins",
//         "trader name":  "Big Kahuna Burger Ltd.",
//         "trader email": "goji@duwkuzmet.gh",
//         "status": "open",
//         "maturity date": "23-03-2013"
//     },
//     {
//         "name": "Dianne Russell",
//         "trader name":  "Biffco Enterprise Ltd.",
//         "trader email": "ek@bewid.cm",
//         "status": "open",
//         "maturity date": "25-10-2019"
//     },
//     {
//         "name": "Bessie Cooper",
//         "trader name":  "Biffco Enterprise Ltd.",
//         "trader email": "noam@selfabge.bg",
//         "status": "Partially filled",
//         "maturity date": "02-08-2013"
//     },
//     {
//         "name": "Floyd Miles",
//         "trader name":  "Acme Co.",
//         "trader email": "ce@absewac.io",
//         "status": "filled",
//         "maturity date": "09-05-2014"
//     },
//     {
//         "name": "Arlene McCoy",
//         "trader name":  "Abstergo Ltd",
//         "trader email": "jif@co.ru",
//         "status": "Partially filled",
//         "maturity date": "28-11-2015"
//     },
//     {
//         "name": "Darlene Robertson",
//         "trader name":  "Big Kahuna Burger Ltd.",
//         "trader email": "moji@ba.gf",
//         "status": "Partially filled",
//         "maturity date": "13-03-2014"
//     },
//     {
//         "name": "Kathryn Murphy",
//         "trader name":  "Barone LLC.",
//         "trader email": "urabebjoz@wub.ck",
//         "status": "Partially filled",
//         "maturity date": "31-05-2015"
//     },
//     {
//         "name": "Wade Warren",
//         "trader name":  "Acme Co.",
//         "trader email": "cuf@nebowed.yt",
//         "status": "filled",
//         "maturity date": "11-02-2014"
//     },
//     {
//         "name": "John Doe",
//         "trader name":  "Agony Co.",
//         "trader email": "buf@nebowed.com",
//         "status": "filled",
//         "maturity date": "10-02-2015"
//     },
//     {
//         "name": "ABD Villears",
//         "trader name":  "RSA Co.",
//         "trader email": "mail@rsa.cu",
//         "status": "open",
//         "maturity date": "07-06-2014"
//     },
//     {
//         "name": "John Mayer",
//         "trader name":  "Bostonyc Ltd.",
//         "trader email": "twill@cub.yt",
//         "status": "filled",
//         "maturity date": "11-12-2012"
//     },
//     {
//         "name": "Neilson McCenherd",
//         "trader name":  "Acme Co.",
//         "trader email": "neil@nebowed.yt",
//         "status": "open",
//         "maturity date": "11-02-2014"
//     },
//     {
//         "name": "Jonathan Herd",
//         "trader name":  "Fight Co.",
//         "trader email": "godofwar@gmail.com",
//         "status": "Partially filled",
//         "maturity date": "19-12-2014"
//     },
//     {
//         "name": "Shane Warne",
//         "trader name":  "Austrelia Co.",
//         "trader email": "cuf@nebowed.yt",
//         "status": "filled",
//         "maturity date": "29-11-2020"
//     },
//     {
//         "name": "BlackHeart Guy",
//         "trader name":  "Toto Co.",
//         "trader email": "athisownlife@vdc",
//         "status": "open",
//         "maturity date": "22-12-1994"
//     },
// ]

// const MainTable = () => {
//     const [selected, setSelected] = useState([]);

//   return (
//     <Box 
//         sx={{ width: '100%' }}
//     >
//         <Paper
//             sx={{ width: '100%', mb: 2 }}
//         >
//             <TableToolbar />

//             <TableContainer>
//                 <Table
//                     sx={{ width: '100%'}}
//                 >
//                     <EnhancedTableHead />

//                     <TableBody>
//                         {
//                             datas
//                             .map((row, index) => {
//                                 const isItemSelected = isSelected(row.name);
//                                 const labelId = `enhanced-table-checkbox-${index}`;

//                             return (
//                                 <TableRow
//                                     hover
//                                     onClick={(event) => handleClick(event, row.name)}
//                                     role="checkbox"
//                                     aria-checked={isItemSelected}
//                                     tabIndex={-1}
//                                     key={row.name}
//                                     selected={isItemSelected}
//                                 >
//                                     <TableCell padding="checkbox">
//                                         <Checkbox
//                                             color="primary"
//                                             checked={isItemSelected}
//                                             inputProps={{
//                                                 'aria-labelledby': labelId,
//                                             }}
//                                         />
//                                     </TableCell>
//                                     <TableCell
//                                         component="th"
//                                         id={labelId}
//                                         scope="row"
//                                         padding="none"
//                                     >
//                                         {row.name}
//                                     </TableCell>
//                                     <TableCell align="right">{row.calories}</TableCell>
//                                     <TableCell align="right">{row.fat}</TableCell>
//                                     <TableCell align="right">{row.carbs}</TableCell>
//                                     <TableCell align="right">{row.protein}</TableCell>
//                                 </TableRow>
//                             );
//                         })}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </Paper>
//     </Box>
//   )
// }

// export default MainTable

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TableToolbar from './TableToolbar'
import EnhancedTableHead from './EnhancedTableHead';


const rows = [
    {
        "name": "Annette Black",
        "trader name":  "Binford Ltd.",
        "trader email": "kepnac@wak.fi",
        "status": "filled",
        "maturity date": "20-05-2015"
    },
    {
        "name": "Guy Hawkins",
        "trader name":  "Big Kahuna Burger Ltd.",
        "trader email": "goji@duwkuzmet.gh",
        "status": "open",
        "maturity date": "23-03-2013"
    },
    {
        "name": "Dianne Russell",
        "trader name":  "Biffco Enterprise Ltd.",
        "trader email": "ek@bewid.cm",
        "status": "open",
        "maturity date": "25-10-2019"
    },
    {
        "name": "Bessie Cooper",
        "trader name":  "Biffco Enterprise Ltd.",
        "trader email": "noam@selfabge.bg",
        "status": "Partially filled",
        "maturity date": "02-08-2013"
    },
    {
        "name": "Floyd Miles",
        "trader name":  "Acme Co.",
        "trader email": "ce@absewac.io",
        "status": "filled",
        "maturity date": "09-05-2014"
    },
    {
        "name": "Arlene McCoy",
        "trader name":  "Abstergo Ltd",
        "trader email": "jif@co.ru",
        "status": "Partially filled",
        "maturity date": "28-11-2015"
    },
    {
        "name": "Darlene Robertson",
        "trader name":  "Big Kahuna Burger Ltd.",
        "trader email": "moji@ba.gf",
        "status": "Partially filled",
        "maturity date": "13-03-2014"
    },
    {
        "name": "Kathryn Murphy",
        "trader name":  "Barone LLC.",
        "trader email": "urabebjoz@wub.ck",
        "status": "Partially filled",
        "maturity date": "31-05-2015"
    },
    {
        "name": "Wade Warren",
        "trader name":  "Acme Co.",
        "trader email": "cuf@nebowed.yt",
        "status": "filled",
        "maturity date": "11-02-2014"
    },
    {
        "name": "John Doe",
        "trader name":  "Agony Co.",
        "trader email": "buf@nebowed.com",
        "status": "filled",
        "maturity date": "10-02-2015"
    },
    {
        "name": "ABD Villears",
        "trader name":  "RSA Co.",
        "trader email": "mail@rsa.cu",
        "status": "open",
        "maturity date": "07-06-2014"
    },
    {
        "name": "John Mayer",
        "trader name":  "Bostonyc Ltd.",
        "trader email": "twill@cub.yt",
        "status": "filled",
        "maturity date": "11-12-2012"
    },
    {
        "name": "Neilson McCenherd",
        "trader name":  "Acme Co.",
        "trader email": "neil@nebowed.yt",
        "status": "open",
        "maturity date": "11-02-2014"
    },
    {
        "name": "Jonathan Herd",
        "trader name":  "Fight Co.",
        "trader email": "godofwar@gmail.com",
        "status": "Partially filled",
        "maturity date": "19-12-2014"
    },
    {
        "name": "Shane Warne",
        "trader name":  "Austrelia Co.",
        "trader email": "cuf@nebowed.yt",
        "status": "filled",
        "maturity date": "29-11-2020"
    },
    {
        "name": "BlackHeart Guy",
        "trader name":  "Toto Co.",
        "trader email": "athisownlife@vdc",
        "status": "open",
        "maturity date": "22-12-1994"
    },
];

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }



export default function EnhancedTable() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [query, setQuery] = useState('')

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
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

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;


    const keys = ["name", "trader name", "trader email"];

    const Search = (data) => {
        return data.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(query))
        );
    };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableToolbar query={query} setQuery={setQuery} />
        <TableContainer>
          <Table
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead onSelectAllClick={handleSelectAllClick} />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              { Search(rows)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row?.['trader name']}</TableCell>
                      <TableCell align="left">{row?.['trader email']}</TableCell>
                      <TableCell align="left">{row?.status}</TableCell>
                      <TableCell align="left">{row?.['maturity date']}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Box padding={2}>
        <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label="Dense padding"
        />
      </Box>
    </Box>
  );
}
