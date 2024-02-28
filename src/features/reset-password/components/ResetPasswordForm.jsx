import { lazy } from "react";
import MultiStepperFormWrapper from "../../../components/Form/MultiStepperFormWrapper";
import { useResetPasswordContext } from "../context/ResetPasswordContextProvider";
const DetailsForm = lazy(()=>import("./DetailsForm"))
const OTPForm = lazy(()=>import("./OTPForm"))

export default function ResetPasswordForm() {
  // We can use this form for Patients as well just grab the role from the local storage then send request accordingly
    const {sendOTP,updatePassword} = useResetPasswordContext()
    const label = "Reset Password"
    let elements
    if(import.meta.env.VITE_OTP_ENABLED === "ENABLE"){
      elements = [
          { Component: <DetailsForm/> ,onSubmit:sendOTP ,label:label},
          { Component: <OTPForm/>,label:label , onSubmit:updatePassword },
        ]
    }
    else{
      elements = [
          { Component: <DetailsForm/> ,onSubmit: updatePassword,label:label},
        ]

    }
    return <MultiStepperFormWrapper steps={elements}/>;
}