import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter} from "react-router-dom";
import DoctorRoutes from "./routes/DoctorRoutes";
import ScheduleCalendar  from "./features/scheduler/components/ScheduleCalendar";
import { getDifferenceDates } from "./utils/dateTime";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      {/* <BrowserRouter>
        <DoctorRoutes/>
      </BrowserRouter> */}
      {/* <ScheduleCalendar/> */}
    </div>
  );
}

export default App;
