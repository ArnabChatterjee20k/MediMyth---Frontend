import Fetcher from "../../../utils/fetcher";

export default function fetchAppointment(schedule_id,appointment_date){
    const endpoint = `appointment/${schedule_id}?date=${appointment_date}`
    return new Fetcher(endpoint).getFetcherUsers()
}