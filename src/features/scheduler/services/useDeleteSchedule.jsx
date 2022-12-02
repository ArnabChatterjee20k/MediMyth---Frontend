import { useMutation } from "@tanstack/react-query";
import { useNotificationContext } from "../../../contexts/ToastContextProvider/NotificationContextProvider";
import deleteSchedule from "../utils/deleteSchedule";

export default function useDeleteSchedule() {
    const deleter = useMutation(({id,accessToken})=>deleteSchedule(id,accessToken))
    const {notify} = useNotificationContext()

    function deleteScheduleWithId(id,accessToken){
        deleter.mutate({id,accessToken},{
            onSuccess:(data)=>{
                const {status} = data
                notify(status,"success")
            },
            onError:()=>{
                notify("Some error occured","error")
            }
        })
    }

    return {deleteScheduleWithId}
}
