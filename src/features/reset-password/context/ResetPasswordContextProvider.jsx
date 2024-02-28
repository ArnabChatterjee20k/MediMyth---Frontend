import { createContext, useState, useContext } from "react";
import { useNotificationContext } from "../../../contexts/ToastContextProvider/NotificationContextProvider";
import useOTP from "../../../services/useOTP";
import useUpdatePassword from "../services/useUpdatePassword";


const ResetPasswordContext = createContext();
export const useResetPasswordContext = () => useContext(ResetPasswordContext);

export default function ResetPasswordContextProvider({ children }) {
    const [data, setData] = useState({
        email: "",
        phone: "",
        password: "",
    });
    const {refetch} = useOTP(data.phone)
    const {notify} = useNotificationContext()
    const {resetPassword} = useUpdatePassword()

  const sendOTP = async ()=>{
    alert(`sending otp to ${data.phone}`)
    const {error, status, data:otp} = await refetch() 
    if (status === "success") {
        const {status:otpStatus} = otp
        notify(otpStatus,"success")
    }
    else{
        notify("Please try Again by going back","error")
    }
  }

  const updatePassword = ()=>{
    resetPassword(data.phone,data.email,data.password,otp)
  }

  const [otp, setOTP] = useState(import.meta.env.VITE_OTP === "ENABLE"?"":123)
  return (
    <ResetPasswordContext.Provider value={{ data, setData, otp, setOTP , sendOTP,updatePassword}}>
      {children}
    </ResetPasswordContext.Provider>
  );
}
