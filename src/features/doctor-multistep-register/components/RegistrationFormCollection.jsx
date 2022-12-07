import { lazy } from "react";
import MultiStepperFormWrapper from "../../../components/Form/MultiStepperFormWrapper";
const ContactInfoForm =  lazy(()=>import("./ContactInfoForm"));
const OTPForm =  lazy(()=>import("./OTPForm"));
const DegreeInfoForm =  lazy(()=>import("./DegreeInfoForm"));

import { useRegisterContext } from "../context/RegisterContextProvider";

const RegistrationFormCollection = () => {
  const { sendOTP,  createAccount } = useRegisterContext();
  const label = "Doctor Registration"
  // otp is at last so that all details and otp are validated togetherly
  const elements = [
    { Component: <ContactInfoForm/> , onSubmit: sendOTP ,label:label},
    { Component: <DegreeInfoForm/> ,label:label },
    { Component: <OTPForm/>, onSubmit: createAccount,label:label },
  ]
  return <MultiStepperFormWrapper steps={elements}/>;
};

export default RegistrationFormCollection;