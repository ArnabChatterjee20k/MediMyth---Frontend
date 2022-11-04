import { serverAddress } from "../../../data/Constants"

export function fetchSchedules(active_doctor_id){
    const url = `${serverAddress}/schedule/patient/${active_doctor_id}`
    return fetch(url).then(data=>data.json())
}