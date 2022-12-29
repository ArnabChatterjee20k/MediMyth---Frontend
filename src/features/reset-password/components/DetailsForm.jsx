import Field from "../../../components/Form/Field";
import { PhoneNumber , Email} from "../../../data/validErrorPatterns";
import { useResetPasswordContext } from "../context/ResetPasswordContextProvider";
export default function DetailsForm() {
    const {data,setData} = useResetPasswordContext()
    const {email,phone,password} = data;
    const handleChange = (e)=>{
      setData(prevData=>({...prevData,[e.target.name]:e.target.value}))
    }
    const validPhone = new RegExp(PhoneNumber).test(phone);
    const validEmail = new RegExp(Email).test(email)
  return (
    <>
        <Field name="email" value={email} inputProps={{pattern:email}}  type="email" label="Email" placeholder="Enter Your Registered Email" changeHandler={handleChange} showError={!validEmail} helperText={!validEmail && "Enter a valid Email"}/>
        <Field name="phone" value={phone} inputProps={{pattern:PhoneNumber}}  type="text" label="Phone Number" placeholder="Enter Your Registered Number" changeHandler={handleChange} showError={!validPhone} helperText={!validPhone && "Enter a valid Phone Number"}/>
        <Field name="password" value={password}   type="text" label="New Password" placeholder="Enter Your New Password" changeHandler={handleChange}/>
    </>
  )
}
