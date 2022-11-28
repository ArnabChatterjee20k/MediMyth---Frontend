import Field from "../../../components/Form/Field"
import { useAppointmentFormContext } from "../context/AppointmentFormContextProvider"
export default function OTPForm() {
    const {otp,setOTP} = useAppointmentFormContext()
    const handleChange = (e)=>{
        setOTP(e.target.value)
    }
  return (
    <Field name="otp" value={otp}  type="text" label="OTP" placeholder="Enter The OTP" changeHandler={handleChange}/>
  )
}
