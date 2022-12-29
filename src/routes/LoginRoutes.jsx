import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
const DoctorRegistration = lazy(() =>
  import("../features/doctor-multistep-register/index")
);
const DoctorLogin = lazy(() => import("../features/login/index"));
const Auth = lazy(() => import("../components/Auth/AuthCard"));
import { DoctorAccountActions } from "../data/DoctorAccountActions";
import { UpdateAccountOptions } from "../data/UpdateAccountOptions";
const DoctorAccount = lazy(() => import("../pages/DoctorAccount"));
const  ResetPassword = lazy(()=>import("../features/reset-password/index"))

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
        <Route path="created" element={<DoctorAccount />} />
        <Route path="doctor">
          <Route path="" element={<Auth label={"Connect Your Account"} links={DoctorAccountActions} alternateLink="/account/doctor/update/password" alternateText="Forget Password?"/>}/>
          <Route path="register" element={<DoctorRegistration />} />
          <Route path="update">
            <Route path="" element={<Auth label={"Edit Options"} links={UpdateAccountOptions}/>} />
            <Route
              path="profile"
              element={<DoctorRegistration edit={true} />}
            />
            <Route path="password" element={<ResetPassword/>} />
          </Route>
          <Route path="login" element={<DoctorLogin />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default LoginRoutes;
