import RegisterContextProvider from "./context/RegisterContextProvider";

import { FormCollection } from "./components/FormCollection";

const MultiStepDoctorRegistration = () => {
  return (
    <RegisterContextProvider>
        <FormCollection/>
    </RegisterContextProvider>
  )
}
export default MultiStepDoctorRegistration;
