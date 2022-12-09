import { useMutation } from "@tanstack/react-query";
import {useNotificationContext} from "../../../contexts/ToastContextProvider/NotificationContextProvider"
import createVacation from "../utils/createVacation";

export default function useCreateVacation() {
    const {notify} = useNotificationContext()
    const vacationMaker = useMutation(({body,accessToken,schdules_id})=>createVacation(accessToken,body,schdules_id))

    function create(body,accessToken,schdules_id){
        const response = vacationMaker.mutate({body,accessToken,schdules_id},{
            onSuccess:(data)=>{
                const {status} = data
                notify(status,"success")
            },
            onError:(err)=>{
                try{
                    const {res} = err
                    res?notify(res,"error"):notify("some error occured!","error")
                  }
                  catch{
                    notify("some error occured!","error")
                  }
            }
        })
    }
    return {create}
}
