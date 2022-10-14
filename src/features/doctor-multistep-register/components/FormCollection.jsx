import PhoneNumberForm from "./PhoneNumberForm";
import OTPForm from "./OTPForm";
import AccountDetailsForm from "./AccountDetailsForm";
import { useRegisterContext } from "../context/RegisterContextProvider";
import MultiStepper from "./MultiStepper";

export const FormCollection = () => {
  const { sendOTP, validateOTP, createAccount } = useRegisterContext();
  const label = "Doctor Registration"
  // otp is at last so that all details and otp are validated togetherly
  const elements = [
    { Component: AccountDetailsForm , onSubmit: createAccount,label:label },
    { Component: PhoneNumberForm , onSubmit: sendOTP ,label:label},
    { Component: OTPForm, onSubmit: validateOTP,label:label },
  ]
  return <MultiStepper steps={elements}/>;
};
