import { lazy } from "react"
const ScheduleCalendar = lazy(()=>import("./ScheduleCalendar")) 
const Events = lazy(()=>import("./Events")) 
import AppointmentContextProvider from "../context/AppointmentContextProvider"
import AppointmentFormContextProvider from "../context/AppointmentFormContextProvider"
const Appointment = ({edit}) => {
  return (
    <AppointmentContextProvider>
      <AppointmentFormContextProvider>
        <ScheduleCalendar edit={edit}/>
        <Events/>
      </AppointmentFormContextProvider>
    </AppointmentContextProvider>
  )
}

export default Appointment