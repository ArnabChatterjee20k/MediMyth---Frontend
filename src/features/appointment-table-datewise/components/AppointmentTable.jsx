import TableComponent from "../../../components/Table/TableComponent";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import useFetchAppointment from "../services/useFetchAppointment";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";

function Message({text}){
    return <Stack width="100%" justifyContent="center" alignItems="center"><Typography fontSize="2rem" fontWeight="bold" marginY={3}>{text}</Typography></Stack>
}
function AppointmentTableBody({ tableData }) {
  return (
    <TableBody>
      {tableData?.map(({ name, appointment_id, age, contact_number }, index) => {
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
  const {id,date} = useParams()
    const {data:tableData,isLoading,isError} = useFetchAppointment(id,date)
    
    if(isLoading) return <Message text="Loading......"/>
    if(isError) return <Message text="Some Error Occured"/>
    if(tableData.length===0) return <Message text="No Appointments...."/>
    
    return <TableComponent tableHeaders={tableHeaders} body={<AppointmentTableBody tableData={tableData}/>} /> 
}
