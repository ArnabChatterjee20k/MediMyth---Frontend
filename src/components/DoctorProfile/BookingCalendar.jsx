import { lazy } from "react";
const Appointment = lazy(()=>import("../../features/appointments"))

import Typography  from "@mui/material/Typography";
import Stack  from "@mui/material/Stack";

const BookingCalendar = () => {
  return (
    <Stack justifyContent="center" gap={1} maxWidth="48rem" marginInline="auto" marginTop={8} padding={2}>
        <Typography fontSize={30}>
            Booking
        </Typography> 
        <Appointment/>
    </Stack>
  )
}

export default BookingCalendar