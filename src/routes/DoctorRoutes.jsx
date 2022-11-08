import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import DoctorPage from "../pages/DoctorProfile/DoctorPage";

import { doctorProfileActions } from "../data/DoctorProfileActions";
const  OptionTab = lazy(()=>import("../components/DoctorProfile/OptionTab"));
import NotFound from "../pages/NotFound";
import Error from "../pages/Error";

import { RequireAuth } from "react-auth-kit";
import BookingCalendar from "../components/DoctorProfile/BookingCalendar";

const DoctorRoutes = () => {
  return (
    <Routes> 
      {/* for patients */}
      <Route path="/doctor">
        <Route path=":id" element={<DoctorPage edit={false} />}>
          <Route index element={<BookingCalendar/>} />
        </Route>

        {/* for doctor profile */}
        <Route path="profile" element={
        <RequireAuth loginPath="/login/doctor">
          <DoctorPage edit={true} />
        </RequireAuth>
        }>
          <Route element={<OptionTab />}>
            {doctorProfileActions.map(({ link, Componenent }) => {
              return <Route key={link} path={link} element={<Componenent />} />;
            })}
          </Route>
        </Route>
      </Route>
      <Route index path="/notfound" element={<NotFound/>}/>
      <Route index path="/error" element={<Error/>}/>
    </Routes>
  );
};

export default DoctorRoutes;
