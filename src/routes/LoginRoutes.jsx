import {lazy} from 'react'
import {Routes,Route} from "react-router-dom"
const DoctorRegistration = lazy(()=>import('../features/doctor-multistep-register/index')) 
const Auth = lazy(()=>import("../components/Auth/AuthCard"))
import { DoctorAccountActions } from '../data/DoctorAccountActions'
const LoginRoutes = () => {
  return (
    <Routes>
        <Route path='/account'>
            <Route path='doctor'>
              <Route path=''  element={<Auth links={DoctorAccountActions}/>}/>
              <Route path='register'element={<DoctorRegistration/>}/>
              </Route>
        </Route>
    </Routes>
  )
}

export default LoginRoutes