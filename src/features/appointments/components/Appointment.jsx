import ScheduleCalendar from "./ScheduleCalendar"
import Events from "./Events"
import AppointmentContextProvider from "../context/AppointmentContextProvider"
const Appointment = () => {
  return (
    <AppointmentContextProvider>
        <ScheduleCalendar/>
        <Events/>
    </AppointmentContextProvider>
  )
}

export default Appointment