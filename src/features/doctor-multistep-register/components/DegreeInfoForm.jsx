import Input from "./Input"
import { Email , UserName } from "../../../data/validErrorPatterns"
import VisibilitySelector from "./VisibilitySelector"

const DegreeInfoForm = () => {
  return (
    <>
        <Input name={"reg_no"} type="text" placeholder="Enter your registration number" label="Registration Number"/>
        <VisibilitySelector contextField={"reg_no_visibility"}/>
        <Input name={"address"} type="text" placeholder="Enter your proper address" label="Address"/>
        <Input name={"category"} type="text" placeholder="eg. dentist" label="Category"/>
        <Input name={"reff_code"} type="text" placeholder="Refferal Code(if provided by admin)" label="Refferal Code" optional={true}/>
    </>
  )
}

export default DegreeInfoForm