import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
const DoctorRegistration = lazy(() =>
  import("../features/doctor-multistep-register/index")
);
const DoctorLogin = lazy(() => import("../features/login/index"));
const Auth = lazy(() => import("../components/Auth/AuthCard"));
import { DoctorAccountActions } from "../data/DoctorAccountActions";
const LoginRoutes = () => {
  // it will work for either doctor or patient.
  // so while building it for patients just see the patient or doctor in the url and redirects them accordingly
  // const isLogged = useIsAuthenticated()
  // const redirect = isLogged()
  // if(redirect){
  //   return <Navigate to="/doctor/profile"/>
  // }
  return (
    <Routes>
      <Route path="/account">
        <Route path="doctor">
          <Route path="" element={<Auth links={DoctorAccountActions} />} />
          <Route path="register" element={<DoctorRegistration />} />
          <Route path="update" element={<DoctorRegistration edit={true}/>} />
          <Route path="login" element={<DoctorLogin />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default LoginRoutes;
