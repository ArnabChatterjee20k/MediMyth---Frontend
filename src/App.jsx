import Tile from "./components/Category/Tile"
import { PrimaryButton } from "./components/ui/Buttons"
import Navbar from "./layouts/Navbar"
import Footer from "./layouts/Footer"
import { PrimaryLogo } from "./components/Logo/PrimaryLogo"
import { SecondaryLogo } from "./components/Logo/SecondaryLogo"
import DoctorPage from "./pages/DoctorProfile/DoctorPage"
import CssBaseline from "@mui/material/CssBaseline"
function App() {

  return (
    <div className="App">
      <CssBaseline/>
      <DoctorPage />
      {/* <div style={{height:"200px",width:"200px",background:"red",margin:"1rem"}}></div>
      <div style={{height:"200px",width:"200px",background:"red",margin:"1rem"}}></div> */}
    </div>
  )
}

export default App
