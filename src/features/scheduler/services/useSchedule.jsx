import { useQuery } from "@tanstack/react-query"
import { useAuthUser } from "react-auth-kit"
import getSchedule from "../utils/getSchedule"

const useSchedule = () => {
    const user = useAuthUser()
    const token = user()?.token
    return (
        useQuery(["Doctor-Schedule",token],()=>getSchedule(token))
  )
}

export default useSchedule