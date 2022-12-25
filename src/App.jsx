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
import Navbar from "./layouts/Navbar";
const Toast = lazy(() => import("./components/ui/Toast"));
import Footer from "./layouts/Footer";
import CommonRoutes from "./routes/CommonRoutes";
import { PageLinks } from "./data/PageLinks";
import { SnackbarProvider} from "notistack";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider
        authType="localstorage"
        authName={authTokenKey}
        cookieDomain={window.location.hostname}
      >
        <DoctorProfileContextProvider>
          <SnackbarProvider maxSnack={10} anchorOrigin={{horizontal:"left",vertical:"top"}}>
          <NotificationContextProvider>
            <ModalContextProvider>
              <CssBaseline />
              <Navbar links={PageLinks} />
              <Stack paddingTop={10}>
                <Suspense fallback={<SuspenseLoader />}>
                  <DoctorRoutes />
                  <LoginRoutes />
                  <CommonRoutes />
                  {/* <Toast /> */}
                </Suspense>
              </Stack>
              <Footer />
            </ModalContextProvider>
          </NotificationContextProvider>
          </SnackbarProvider>
        </DoctorProfileContextProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
