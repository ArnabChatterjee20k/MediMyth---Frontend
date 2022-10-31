import Stack from "@mui/material/Stack";
import { useAppointment } from "../context/AppointmentContextProvider";
import EventCards from "./EventCards";

const Events = () => {
  const { appointment,appointmentDate } = useAppointment();
  return <Stack gap={3}>
    {appointment.map(({slot_start,slot_end,address,booking_start,booking_end,patient_limit,appointment_data},index)=>{
       return <EventCards key={index} start={slot_start} end={slot_end} address={address} date={appointmentDate.current} booking_start={booking_start} booking_end={booking_end} limit={patient_limit} seatsBooked={appointment_data.length}/>
    })}
    </Stack>;
};

export default Events;