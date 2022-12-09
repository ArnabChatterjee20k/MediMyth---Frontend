import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";

import Proptypes from "prop-types";

export default function TableComponent({ body, tableHeaders , ...tableProps}) {
  console.log(tableProps);
  return (
    <TableContainer
      component={Paper}
      elevation={2}
      sx={{
        marginInline: "auto",
        marginBlock: 4,
        width: { xs: "90%", sm: "80%", md: "60%" },
      }}
      {...tableProps}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeaders?.map((header, index) => (
              <TableCell key={index} align={index !== 0 ? "right" : "inherit"}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        {body}
      </Table>
    </TableContainer>
  );
}

TableComponent.prototype = {
  body: Proptypes.element.isRequired,
  tableHeaders: Proptypes.array.isRequired,
};
