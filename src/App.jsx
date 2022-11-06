import { lazy , Suspense } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import DoctorRoutes from "./routes/DoctorRoutes";
import NotificationContextProvider from "./contexts/ToastContextProvider/NotificationContextProvider";
import DoctorProfileContextProvider from "./contexts/DoctorProfileContextProvider/DoctorProfileContextProvider";
import Stack  from "@mui/material/Stack";
import SuspenseLoader from "./components/ui/SuspenseLoader";

const Navbar = lazy(()=>import("./layouts/Navbar"))
const Toast = lazy(()=>import("./components/ui/Toast"))

function App() {
  return (
    <NotificationContextProvider>
      <DoctorProfileContextProvider>
        <CssBaseline />
        <Suspense fallback={<SuspenseLoader/>}>
        <Navbar/>
        <Stack paddingTop={10}>
          <BrowserRouter>
            <DoctorRoutes />
          </BrowserRouter>
          <Toast />
        </Stack>
        </Suspense>
        {/* <MultiStepDoctorRegistration /> */}
        {/* <ScheduleCalendar/> */}
        {/* <AppointmentViewer/> */}
      </DoctorProfileContextProvider>
    </NotificationContextProvider>
  );
}

export default App;
