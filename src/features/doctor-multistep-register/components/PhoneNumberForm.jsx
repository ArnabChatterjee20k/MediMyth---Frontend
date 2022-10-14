import Input from "./Input"
import { PhoneNumber } from "../data/validErrorPatterns"
const PhoneNumberForm = () => {
  return (
    <Input  name="phone_no" errorPattern={PhoneNumber} errorText="Not a Valid Phone Number" type="text" placeholder="10 digit phone number" label="Phone Number" required/>
  )
}

export default PhoneNumberForm