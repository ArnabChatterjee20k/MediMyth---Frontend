import Stack from "@mui/material/Stack";
import { useAppointment } from "../context/AppointmentContextProvider";
import EventCards from "./EventCards";

const Events = () => {
  const { appointment } = useAppointment();
  return <Stack gap={3}>
    {appointment.map(({slot_start,slot_end,address},index)=>{
       return <EventCards key={index} start={slot_start} end={slot_end} address={address}/>
    })}
    </Stack>;
};

export default Events;