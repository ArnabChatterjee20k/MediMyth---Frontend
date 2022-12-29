import { useResetPasswordContext } from "../context/ResetPasswordContextProvider";
import Field from "../../../components/Form/Field";
export default function OTPForm() {
    const{otp,setOTP} = useResetPasswordContext()
    const handleChange = (e)=>{
        setOTP(e.target.value)
    }
  return (
    <Field name="otp" value={otp}  type="text" label="OTP" placeholder="Enter The OTP" changeHandler={handleChange}/>
  )
}