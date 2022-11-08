import {lazy} from 'react'
import {Routes,Route} from "react-router-dom"
import MultiStepDoctorRegistration  from '../features/doctor-multistep-register/index'

const LoginRoutes = () => {
  return (
    <Routes>
        <Route path='/login'>
            <Route path='doctor' element={<MultiStepDoctorRegistration/>}/>
        </Route>
    </Routes>
  )
}

export default LoginRoutes