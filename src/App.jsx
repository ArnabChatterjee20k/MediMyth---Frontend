import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter} from "react-router-dom";
import DoctorRoutes from "./routes/DoctorRoutes";
import { MultiStepDoctorRegistration } from "./features/doctor-multistep-register";
function App() {
  return (
    <div className="App">
      <CssBaseline />
      {/* <BrowserRouter>
        <DoctorRoutes/>
      </BrowserRouter> */}
      <MultiStepDoctorRegistration/>
    </div>
  );
}

export default App;
