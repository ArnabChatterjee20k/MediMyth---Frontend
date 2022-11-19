import Fetcher from "../../../utils/fetcher"

/**
 * 
 * @param {Number} active_doctor_id 
 * @returns {Promise} the schedule data
 */
export function fetchSchedules(active_doctor_id){
    const endpoint = `schedule/patient/${active_doctor_id}`
    return new Fetcher(endpoint).getFetcherUsers()
}