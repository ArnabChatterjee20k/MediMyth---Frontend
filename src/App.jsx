import { lazy, Suspense } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import DoctorRoutes from "./routes/DoctorRoutes";
import NotificationContextProvider from "./contexts/ToastContextProvider/NotificationContextProvider";
import DoctorProfileContextProvider from "./contexts/DoctorProfileContextProvider/DoctorProfileContextProvider";
import ModalContextProvider from "./contexts/ModalContextProvider/ModalContextProvider";
import Stack from "@mui/material/Stack";
import SuspenseLoader from "./components/ui/SuspenseLoader";
import { AuthProvider } from "react-auth-kit";
import LoginRoutes from "./routes/LoginRoutes";
import { authTokenKey } from "./data/Constants";
import ComponentModal from "./components/ui/ComponentModal";
import AppointmentCard from "./components/ui/AppointmentCard";
const Navbar = lazy(() => import("./layouts/Navbar"));
const Toast = lazy(() => import("./components/ui/Toast"));

function App() {
  const test = true;
  return (
    <AuthProvider
      authType="localstorage"
      authName={authTokenKey}
      cookieDomain={window.location.hostname}
    >
      {
        test && <AppointmentCard/>
      }

      {!test && <DoctorProfileContextProvider>
        <NotificationContextProvider>
          <ModalContextProvider>
            <CssBaseline />
            <Navbar />
            <Stack paddingTop={10}>
              <Suspense fallback={<SuspenseLoader />}>
                {/* <ComponentModal/> */}
                <BrowserRouter>
                  <DoctorRoutes />
                  <LoginRoutes />
                </BrowserRouter>
                <Toast />
              </Suspense>
            </Stack>
            {/* <MultiStepDoctorRegistration /> */}
            {/* <ScheduleCalendar/> */}
            {/* <AppointmentViewer/> */}
          </ModalContextProvider>
        </NotificationContextProvider>
      </DoctorProfileContextProvider>}
    </AuthProvider>
  );
}

export default App;
