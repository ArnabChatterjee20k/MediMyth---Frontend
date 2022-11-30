import Stack from "@mui/material/Stack";
import { lazy } from "react";
import MultiStepperFormWrapper from "../../../components/Form/MultiStepperFormWrapper";
import { useAppointmentFormContext } from "../context/AppointmentFormContextProvider";
const OTPForm = lazy(() => import("./OTPForm"));
const PatientDetailsForm = lazy(() => import("./PatientDetailsForm"));

export default function AppointmentForm() {
  const label = "Patient";
  const {sendOTP,registerPatient} = useAppointmentFormContext();
  const elements = [
    { Component: PatientDetailsForm, label: label,onSubmit:sendOTP },
    {
      Component: OTPForm,
      onSubmit: () => console.log("sending otp"),
      label: label,
      onSubmit:registerPatient
    },
  ];
  return (
    <Stack minHeight="100vh">
      <MultiStepperFormWrapper steps={elements} />
    </Stack>
  );
}
