import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { doctorProfileActions } from "../data/DoctorProfileActions";
import { RequireAuth } from "react-auth-kit";

import DoctorPage from "../pages/DoctorProfile/DoctorPage";
const OptionTab = lazy(() => import("../components/DoctorProfile/OptionTab"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Error = lazy(() => import("../pages/Error"));

import BookingCalendar from "../components/DoctorProfile/BookingCalendar";

const AppointmentTable = lazy(()=>import("../features/appointment-table-datewise/components/AppointmentTable"))

const DoctorRoutes = () => {
  return (
    <Routes>
      {/* for patients */}
      <Route path="/doctor">
        <Route path=":id" element={<DoctorPage edit={false} />}>
          <Route index element={<BookingCalendar />} />
        </Route>

        {/* for doctor profile */}
        <Route
          path="profile"
          element={
            <RequireAuth loginPath="/account/doctor">
              <DoctorPage edit={true} />
            </RequireAuth>
          }
        >
          <Route element={<OptionTab />}>
            {doctorProfileActions.map(({ link, Componenent }) => {
              return <Route key={link} path={link} element={<Componenent />} />;
            })}
          </Route>

          {/* for viewing appointment of a schedule */}
          <Route path="schedule/:id/:date" element={<AppointmentTable/>} />
        </Route>
      </Route>
      <Route index path="/notfound" element={<NotFound />} />
      <Route index path="/error" element={<Error />} />
    </Routes>
  );
};

export default DoctorRoutes;
