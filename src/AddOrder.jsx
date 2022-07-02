import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment ,incrementByAmount} from './reducers/Dataslice'

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddBoxSharpIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveSharpIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import Pagination from "@mui/material/Pagination";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Divider from "@mui/material/Divider";

// import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));
const AddOrder = () => {
  const [state, setState] = useState({ count: 0 });
  const increments = () => {
    setState({
      count: state.count + 1
    });
  };
  const decrements = () => {
    setState({
      count: state.count - 1
    });
  };
  const dispatch = useDispatch()
  const OnbuybtnHandle = () => {
    dispatch(increment())
    dispatch (incrementByAmount(100))
  };

  return (
    <div>
      {/* // Product Table */}
      <TableContainer component={Paper} mt={2} ml={3}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell> Id</StyledTableCell>
              <StyledTableCell>In-Stock</StyledTableCell>
              {/* <StyledTableCell align="center">Cust Name</StyledTableCell> */}
              <StyledTableCell align="center">Products Name</StyledTableCell>
              <StyledTableCell align="center">Qty.</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="center">Total Price</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow key="">
              <StyledTableCell component="th" scope="row">
                1
              </StyledTableCell>
              <StyledTableCell align="center">GFgf5555</StyledTableCell>
              {/* <StyledTableCell align="center">Ganesh</StyledTableCell> */}
              <StyledTableCell align="center">ABC</StyledTableCell>
              <StyledTableCell align="center">
                <IconButton aria-label="decrement" onClick={decrements}>
                  <RemoveSharpIcon />
                </IconButton>
                <span>{state.count}</span>
                <IconButton aria-label="increment" onClick={increments}>
                  <AddBoxSharpIcon />
                </IconButton>
              </StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">1200</StyledTableCell>
              <StyledTableCell align="center">
                <Stack direction="row" spacing={1}>
                  <Button variant="contained"   onClick={OnbuybtnHandle}>
                    Buy
                  </Button>
                </Stack>
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={2} sx={{ mt: 2, ml: 42 }}>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>
    </div>
  );
};

export default AddOrder;
