import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Proptypes from "prop-types";

export default function TableComponent({ tableHeaders, tableData }) {
  return (
    <TableContainer
      component={Paper}
      elevation={2}
      sx={{
        marginInline: "auto",
        marginBlock: 4,
        width: { xs: "90%", sm: "80%", md: "60%" },
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeaders.map((header, index) => (
              <TableCell align={index !== 0 ? "right" : "inherit"}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* for every row we are iterating over columns */}
          {tableData.map((row, index) => {
            return (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {Object.values(row).map((col, index) => {
                  return (
                    <TableCell
                      key={index}
                      component={index === 0 && "th"}
                      scope={index === 0 && "row"}
                      align={index !== 0 ? "right" : "inherit"}
                    >
                      {col}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

TableComponent.prototype = {
    tableHeaders:Proptypes.array.isRequired,
    tableData:Proptypes.array.isRequired
}