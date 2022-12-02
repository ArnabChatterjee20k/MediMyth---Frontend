import { useMutation } from "@tanstack/react-query";
import { useNotificationContext } from "../../../contexts/ToastContextProvider/NotificationContextProvider";
import { createSchedule } from "../utils/createSchedule";
import {queryClient} from "../../../queryClient/queryClient"
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
                if(errRes){
                    notify(`${errRes}`,"error")
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
