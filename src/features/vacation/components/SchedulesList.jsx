import TableComponent from "../../../components/Table/TableComponent";
import Stack from "@mui/material/Stack";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { days } from "../../../data/days";
import { useVacationContext } from "../context/VacationContextProvider";
import useGetSchedulesBetweenTwoDates from "../services/useGetSchedulesBetweenTwoDates";
import { useAuthUser } from "react-auth-kit";
import { useEffect } from "react";

function ScheduleTableBody({ scheduleData }) {
  const { schedules, setSchedules } = useVacationContext();

  useEffect(() => {
    const defaultSchedule = {};
    scheduleData.map(({ id }) => {
      defaultSchedule[id] = true;
    });
    setSchedules(defaultSchedule);
  }, []);

  const handleChange = (e) => {
    setSchedules((prevData) => {
      return { ...prevData, [e.target.name]: !schedules[e.target.name] };
    });
  };
  return (
    <TableBody>
      {scheduleData?.map(({ address, appointment_data, id, day }) => {
        return (
          <TableRow>
            <TableCell component="th" scope="row">
              <input
                type="checkbox"
                name={id}
                checked={schedules[id]}
                value={schedules[id]}
                onChange={handleChange}
              />
            </TableCell>
            <TableCell align="right">{Object.keys(days)[day]}</TableCell>
            <TableCell align="right">{address}</TableCell>
            <TableCell align="right">{appointment_data?.length}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}

export default function SchedulesList() {
  const auth = useAuthUser();
  const token = auth()?.token;

  const { isLoading, data } = useGetSchedulesBetweenTwoDates(token);

  const tableHeaders = ["cancel", "day", "address", "appointments"];
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <Stack minHeight="60vh" alignItems="center" width="100%">
      <TableComponent
        tableHeaders={tableHeaders}
        body={<ScheduleTableBody scheduleData={data} />}
        sx={{ width: "100%" }}
      />
    </Stack>
  );
}
