import RegisterContextProvider from "./context/RegisterContextProvider";

import { FormCollection } from "./components/FormCollection";

export const MultiStepDoctorRegistration = () => {
  return (
    <RegisterContextProvider>
        <FormCollection/>
    </RegisterContextProvider>
  )
}
