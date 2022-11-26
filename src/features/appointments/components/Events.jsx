import Stack from "@mui/material/Stack";
import { useAppointment } from "../context/AppointmentContextProvider";
import EventCards from "./EventCards";

const Events = () => {
  const { appointment,appointmentDate } = useAppointment();
  return <Stack gap={3}>
    {appointment.map(({id,slot_start,slot_end,address,booking_start,booking_end,patient_limit,appointment_data},index)=>{
       return <EventCards id={id} key={index} start={slot_start} end={slot_end} address={address} date={appointmentDate} booking_start={booking_start} booking_end={booking_end} limit={patient_limit} appointment_data={appointment_data}/>
    })}
    </Stack>;
};

export default Events;