import { useQuery } from '@tanstack/react-query'
import { fetchSchedules } from '../utils/fetchSchedules'

const useSchedules = (doctor_id) => {
  return (
    useQuery(["doctor",doctor_id],()=>{
        return fetchSchedules(doctor_id)
    })
  )
}

export default useSchedules