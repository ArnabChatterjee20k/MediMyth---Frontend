
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter} from "react-router-dom";
import DoctorRoutes from "./routes/DoctorRoutes";


function App() {
  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <DoctorRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
