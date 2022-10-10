import DoctorPage from "./pages/DoctorProfile/DoctorPage";
import CssBaseline from "@mui/material/CssBaseline";
import { OptionTab } from "./components/DoctorProfile/OptionTab";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { doctorProfileActions } from "./data/DoctorProfileActions";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/doctor">
            <Route path=":id" element={<DoctorPage edit={false} />}>
              <Route index element={<h2>Booke</h2>} />
            </Route>

            <Route path="profile" element={<DoctorPage edit={true} />}>
              <Route element={<OptionTab />}>
                {doctorProfileActions.map(({ link, Componenent }) => {
                  return (
                    <Route key={link} path={link} element={<Componenent />} />
                  );
                })}
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
