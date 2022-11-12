import Input from "./Input"
import { Email , UserName } from "../../../data/validErrorPatterns"
const DegreeInfoForm = () => {
  return (
    <>
        <Input name={"reg_no"} type="text" placeholder="Enter your registration number" label="Registration Number"/>
        <Input name={"address"} type="text" placeholder="Enter your proper address" label="Address"/>
        <Input name={"category"} type="text" placeholder="eg. dentist" label="Category"/>
        <Input name={"reff_code"} type="text" placeholder="Refferal Code(if provided by admin)" label="Refferal Code" optional/>
    </>
  )
}

export default DegreeInfoForm