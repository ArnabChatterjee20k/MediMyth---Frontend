import Input from "./Input"
import { PhoneNumber , UserName , Email } from "../../../data/validErrorPatterns"
import VisibilitySelector from "./VisibilitySelector"
const ContactInfoForm = ({noPassword}) => {
  return (
    <>
      <Input name={"name"} errorPattern={UserName} errorText="Not a Valid UserName" type="text" placeholder="Enter your full name" label="Full Name"/>
      {!noPassword &&<Input name={"password"} type="password" placeholder="Create a password" label="Password"/>}
      <Input  name="phone_no" errorPattern={PhoneNumber} errorText="Not a Valid Phone Number" type="text" placeholder="10 digit phone number" label="Phone Number"/>
      <Input  name="description" type="text" placeholder="About You(Not Mandatory)" label="Description" optional={true}/>
      <VisibilitySelector contextField={"phone_no_visibility"}/>
      <Input name={"email"} errorPattern={Email} errorText="Not a Valid Email" type="email" placeholder="Enter your email" label="Email"/>
      <VisibilitySelector contextField={"email_visibility"}/>
    </>
  )
}

export default ContactInfoForm