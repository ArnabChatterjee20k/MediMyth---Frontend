import { useMutation } from "@tanstack/react-query";
import updatePassword from "../utils/updatePassword";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { useNotificationContext } from "../../../contexts/ToastContextProvider/NotificationContextProvider";

export default function useUpdatePassword() {
  const request = useMutation(({ phone, email, password }) =>
    updatePassword(phone, email, password)
  );
  const { notify } = useNotificationContext();
  const signOut = useSignOut();
  const redirect = useNavigate();

  function resetPassword(phone,email,password,otp){
     const response =  request.mutate({phone,email,password,otp},{
        onSuccess:(data)=>{
            notify("Password Reset Successfull","success")
            signOut()
            redirect("/account/doctor/login")
        },
        onError:(err)=>{
            try{
                const res = err?.res
                notify(res,"error")}
            catch{

                notify("Some error occured","error")
            }
        }
     })
    }
    return {resetPassword}
}
