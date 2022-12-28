import { useMutation } from "@tanstack/react-query";
import { useNotificationContext } from "../contexts/ToastContextProvider/NotificationContextProvider";
import updateDoctor from "../features/doctor-multistep-register/utils/updateDoctor";
import { useSignOut } from 'react-auth-kit'
import { useNavigate } from "react-router-dom";
import { queryClient } from "../queryClient/queryClient";

export default function useUpdateDoctor() {
    const updater =  useMutation(({body,accessToken})=>updateDoctor(body,accessToken))
    const {notify} = useNotificationContext()
    const signOut = useSignOut()
    const redirect = useNavigate()
    function update(body,accessToken){
        const request = updater.mutate({body,accessToken},{
            onSuccess:(data)=>{
                notify("Profile Updated!","success")
                signOut()
                notify("Signed Out!","warning")
                redirect("/account/doctor/login")
                queryClient.invalidateQueries(
                    ["doctor_profile","myaccount",accessToken])
            },
            onError:(err)=>{
                console.log("error",err);
            }
        })
    }

    return {update}
}
