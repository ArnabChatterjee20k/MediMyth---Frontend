import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import DoctorRoutes from "./routes/DoctorRoutes";
import { MultiStepDoctorRegistration } from "./features/doctor-multistep-register";
import NotificationContextProvider from "./contexts/ToastContextProvider/NotificationContextProvider";
import Toast from "./components/ui/Toast";
import DoctorProfileContextProvider from "./contexts/DoctorProfileContextProvider/DoctorProfileContextProvider";
function App() {
  return (
    <NotificationContextProvider>
      <DoctorProfileContextProvider>
        <CssBaseline />
        <BrowserRouter>
          <DoctorRoutes />
        </BrowserRouter>
        <Toast />
        {/* <MultiStepDoctorRegistration /> */}
        {/* <ScheduleCalendar/> */}
        {/* <AppointmentViewer/> */}
      </DoctorProfileContextProvider>
    </NotificationContextProvider>
  );
}

export default App;
