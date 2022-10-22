import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import DoctorRoutes from "./routes/DoctorRoutes";
import { MultiStepDoctorRegistration } from "./features/doctor-multistep-register";
import NotificationContextProvider from "./contexts/ToastContextProvider/NotificationContextProvider";
import Toast from './components/ui/Toast'
import ScheduleCalendar from "./features/appointments/components/ScheduleCalendar";
import EventCards from "./features/appointments/components/EventCards";
function App() {
  return (
    <NotificationContextProvider>
      <CssBaseline />
      {/* <BrowserRouter>
        <DoctorRoutes/>
      </BrowserRouter> */}
      <Toast/>
      {/* <MultiStepDoctorRegistration /> */}
      {/* <ScheduleCalendar/> */}
      <EventCards/>
    </NotificationContextProvider>
  );
}

export default App;
