import Stack from "@mui/material/Stack";
import { lazy } from "react";
import MultiStepperFormWrapper from "../../../components/Form/MultiStepperFormWrapper";
const OTPForm = lazy(() => import("./OTPForm"));
const PatientDetailsForm = lazy(() => import("./PatientDetailsForm"));

export default function AppointmentForm() {
  const label = "Patient";
  const elements = [
    { Component: PatientDetailsForm, label: label },
    {
      Component: OTPForm,
      onSubmit: () => console.log("sending otp"),
      label: label,
    },
  ];
  return (
    <Stack minHeight="100vh">
      <MultiStepperFormWrapper steps={elements} />
    </Stack>
  );
}
