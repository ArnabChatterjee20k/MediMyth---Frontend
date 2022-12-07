import RegisterContextProvider from "./context/RegisterContextProvider";

import { lazy , Suspense} from "react";
const RegistrationFormCollection = lazy(()=>import( "./components/RegistrationFormCollection"));
const UpdateFormCollection = lazy(()=>import( "./components/UpdateFormCollection"));

const MultiStepDoctorRegistration = ({edit}) => {
  return (
    <Suspense>
      <RegisterContextProvider>
          {edit?<UpdateFormCollection/>:<RegistrationFormCollection/>}
      </RegisterContextProvider>
    </Suspense>
  )
}
export default MultiStepDoctorRegistration;
