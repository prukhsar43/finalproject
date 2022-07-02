import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Divider from "@mui/material/Divider";

// import { styled } from "@mui/material/styles";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: "center",
//   color: theme.palette.text.secondary
// }));

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
const HomePage = () => {
  return (
    <div>
      <h3>Logged In Punnet Kumar , Welcome ....</h3>
      <Stack direction="row" spacing={4}>
        <Card sx={{ maxWidth: 250 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="160"
              image="https://www.pngkey.com/png/detail/138-1388270_transparent-user-png-icon.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Puneet Kumar
              </Typography>
              <Divider />
              <Typography
                sx={{ mt: 1, mb: 1, ml: 1 }}
                variant="body2"
                color="text.secondary"
              >
                Email : puneet@gmail.com
              </Typography>
              <Divider />
              <Typography
                sx={{ mt: 2, mb: 1, ml: 1 }}
                variant="body2"
                color="text.secondary"
              >
                Address : House no. MH564 , Shivaji
                Nagar,Sarangpur,Illahbad,India-411036
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 600 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="360"
              image="https://ibwc.in/wp-content/uploads/2021/06/log.png"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
      </Stack>
      <div>
        <h3
          style={{
            alignItem: "center"
          }}
        >
          Product List :
        </h3>
        {/* // Product Table */}
        <TableContainer component={Paper} mt={2} ml={3}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell> Id</StyledTableCell>
                <StyledTableCell>In-Stock</StyledTableCell>
                {/* <StyledTableCell align="center">Cust Name</StyledTableCell> */}
                <StyledTableCell align="center">Products Name</StyledTableCell>

                <StyledTableCell align="center">Price</StyledTableCell>

                <StyledTableCell align="center">Payment</StyledTableCell>
                <StyledTableCell align="center">Mail Send</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow key="">
                <StyledTableCell component="th" scope="row">
                  1
                </StyledTableCell>
                <StyledTableCell align="center">55</StyledTableCell>
                <StyledTableCell align="center">ABC</StyledTableCell>
                <StyledTableCell align="center">100</StyledTableCell>
                <StyledTableCell align="center" style={{ color: "red" }}>
                  <h4>Pending</h4>
                </StyledTableCell>
                <StyledTableCell align="center" style={{ color: "red" }}>
                  <h4>Pending</h4>
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Stack spacing={2} sx={{ mt: 2, ml: 42 }}>
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
      </div>
    </div>
  );
};

export default HomePage;
