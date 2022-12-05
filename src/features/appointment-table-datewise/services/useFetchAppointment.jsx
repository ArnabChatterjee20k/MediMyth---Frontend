import { useQuery } from "@tanstack/react-query"
import fetchAppointment from "../utils/fetchAppointment"

export default function useFetchAppointment(schedule_id,appointment_date) {
  return (
    useQuery(["Appointments",schedule_id],()=>fetchAppointment(schedule_id,appointment_date))
  )
}
