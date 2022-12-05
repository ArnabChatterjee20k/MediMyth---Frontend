import TableComponent from "../../../components/Table/TableComponent";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

function AppointmentTableBody({ tableData }) {
  return (
    <TableBody>
      {tableData.map(({ name, appointment_id, age, contact_number }, index) => {
        return (
          <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">{name}</TableCell>
            <TableCell align="right">{appointment_id}</TableCell>
            <TableCell align="right">{age}</TableCell>
            <TableCell align="right">{contact_number}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}
export default function AppointmentTable() {
  const tableHeaders = ["name",  "appointment_id","age","contact_number",];
  const tableData = [
    {
      age: 18,
      date: "2022-12-04T15:12:08.987076",
      person_id: null,
      appointment_id: "MMA-33",
      contact_number: "9064846599",
      name: "Arnab CHatterjee",
      appointment_date: "2022-12-05",
      appointment_data: 17,
      id: 33,
    },
    {
      age: 18,
      date: "2022-12-04T15:25:05.222374",
      person_id: null,
      appointment_id: "MMA-34",
      contact_number: "9064846591",
      name: "Arnab CHatterjee",
      appointment_date: "2022-12-05",
      appointment_data: 17,
      id: 34,
    },
  ];
  return <TableComponent tableHeaders={tableHeaders} body={<AppointmentTableBody tableData={tableData}/>} />;
}
