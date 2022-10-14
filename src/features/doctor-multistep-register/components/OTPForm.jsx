import Input from "./Input"
import { useRegisterContext } from "../context/RegisterContextProvider"
const OTPForm = () => {
  const {otp,setOTP} = useRegisterContext()
  return (
    <Input name={"OTP"} type="text" placeholder="OTP sent to your number" label="OTP" changeHandler={(e)=>setOTP(e.target.value)}/>
  )
}

export default OTPForm