import RegisterContextProvider from "./context/RegisterContextProvider";

import { lazy , Suspense} from "react";
const FormCollection = lazy(()=>import( "./components/FormCollection"));

const MultiStepDoctorRegistration = () => {
  return (
    <Suspense>
      <RegisterContextProvider>
          <FormCollection/>
      </RegisterContextProvider>
    </Suspense>
  )
}
export default MultiStepDoctorRegistration;
