import Tile from "./components/Category/Tile"
import { PrimaryButton } from "./components/ui/Buttons"
import Navbar from "./layouts/Navbar"
import Footer from "./layouts/Footer"
import { PrimaryLogo } from "./components/Logo/PrimaryLogo"
import { SecondaryLogo } from "./components/Logo/SecondaryLogo"
import DoctorProfile from "./pages/DoctorProfile"
import CssBaseline from "@mui/material/CssBaseline"
function App() {

  return (
    <div className="App">
      <CssBaseline/>
      <DoctorProfile />
    </div>
  )
}

export default App
