import Input from "./Input"
import { Email , UserName } from "../data/validErrorPatterns"
const AccountDetailsForm = () => {
  return (
    <>
        <Input name={"name"} errorPattern={UserName} helperText="Not a Valid UserName" type="text" placeholder="Enter your phone number" label="Phone Number"/>
        <Input name={"email"} errorPattern={Email} helperText="Not a Valid Email" type="email" placeholder="Enter your email" label="Email"/>
        <Input name={"reg_no"} type="text" placeholder="Enter your registration number" label="Registration Number"/>
        <Input name={"address"} type="text" placeholder="Enter your proper address" label="Address"/>
        <Input name={"category"} type="text" placeholder="eg. dentist" label="Category"/>
        <Input name={"reff_code"} type="text" placeholder="Refferal Code(if provided by admin)" label="Refferal Code"/>


    </>
  )
}

export default AccountDetailsForm