import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles({
  table: {
    maxWidth: 1070,
    margin: 'auto',
  },
});

function createData(name, comment) {
  return { name, comment };
}

const rows = [
  createData('Kevin L.', 'Amazing'),
  createData('Howard K.', 'Fantastic!'),
  createData('Brandon K', 'Incredible!'),
  createData('Terry L.', 'Shocking!'),
  createData('Harry P.', 'Flabbergasted!'),
  createData('Kevin L.', 'Amazing'),
  createData('Howard K.', 'Fantastic!'),
  createData('Brandon K', 'Incredible!'),
  createData('Terry L.', 'Shocking!'),
  createData('Harry P.', 'Flabbergasted!'),
];

export default function Comments(props) {
  const [page, setPage] = useState(0);

  //   const nextPage = () => {

  //   }

  //   const backPage = () => {
  //     if
  //   }

  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow style={{ backgroundColor: '#999999' }}>
            <TableCell>
              Comments{' '}
              <div style={{ display: 'inline' }} className="float-right">
                {page === 0 ? (
                  <ArrowRightIcon />
                ) : (
                  <>
                    <ArrowLeftIcon />
                    <ArrowRightIcon />
                  </>
                )}
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ backgroundColor: '#faf0e6' }}>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.comment} ~ {row.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
