import { useMutation } from "@tanstack/react-query";
import { useNotificationContext } from "../../../contexts/ToastContextProvider/NotificationContextProvider";
import { createSchedule } from "../utils/createSchedule";
import {queryClient} from "../../../queryClient/queryClient"
import { days } from "../../../data/days";
import { weeks } from "../../../data/weeks";

const useCreateSchedule = () =>{
    const response = useMutation(({token,body})=> createSchedule(token,body))
    const {notify}  = useNotificationContext()
    function create({token,body}){
        const res = response.mutate({token,body},{
            onSuccess: async(data)=>{
                const res = await data
                const status = data?.status || "successful"
                notify(`${status}`,"success")
                queryClient.invalidateQueries(["Doctor-Schedule",token])
            },
            onError: async(err)=>{
                const errRes = err?.res
                if(Object.keys(errRes).length){
                    // notify(`${errRes}`,"error")
                    // errRes structure is {week:[...days]}

                    // building the string to render the toasts for every week
                    Object.keys(errRes).map((week)=>{
                        const weekString = isNaN(Number(week))?"EveryWeek":Object.keys(weeks)[Number(week)];
                        const errorDays = errRes[week].map((day)=>{
                            return Object.keys(days)[day]
                        })
                        const dayErrorString = errorDays.join(",");
                        const errorMessage = `Plz check schedule for ${dayErrorString} for ${weekString}`
                        notify(`${errorMessage}`,"error")
                        // alert(`${errorMessage}`)
                    })
                }
                else{
                    notify("Something went wrong","error")
                }
            }
        })
    }

    return {create , isLoading:response.isLoading}
}

export default useCreateSchedule;
