import React from "react";
import { Routes, Route } from "react-router-dom";
import DoctorPage from "../pages/DoctorProfile/DoctorPage";
import { BookingCalendar } from "../features/appointments";
import { doctorProfileActions } from "../data/DoctorProfileActions";
import { OptionTab } from "../components/DoctorProfile/OptionTab";
const DoctorRoutes = () => {
  return (
    <Routes>
      {/* for patients */}
      <Route path="/doctor">
        <Route path=":id" element={<DoctorPage edit={false} />}>
          <Route index element={<BookingCalendar/>} />
        </Route>

        {/* for doctor profile */}
        <Route path="profile" element={<DoctorPage edit={true} />}>
          <Route element={<OptionTab />}>
            {doctorProfileActions.map(({ link, Componenent }) => {
              return <Route key={link} path={link} element={<Componenent />} />;
            })}
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default DoctorRoutes;
