import ContactInfoForm from "./ContactInfoForm";
import OTPForm from "./OTPForm";
import DegreeInfoForm from "./DegreeInfoForm";
import { useRegisterContext } from "../context/RegisterContextProvider";
import MultiStepper from "./MultiStepper";

export const FormCollection = () => {
  const { sendOTP,  createAccount } = useRegisterContext();
  const label = "Doctor Registration"
  // otp is at last so that all details and otp are validated togetherly
  const elements = [
    { Component: ContactInfoForm , onSubmit: sendOTP ,label:label},
    { Component: DegreeInfoForm ,label:label },
    { Component: OTPForm, onSubmit: createAccount,label:label },
  ]
  return <MultiStepper steps={elements}/>;
};
