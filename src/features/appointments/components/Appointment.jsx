import { lazy } from "react"
const ScheduleCalendar = lazy(()=>import("./ScheduleCalendar")) 
const Events = lazy(()=>import("./Events")) 
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