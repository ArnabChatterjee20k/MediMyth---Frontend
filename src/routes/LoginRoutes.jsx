import {lazy} from 'react'
import {Routes,Route} from "react-router-dom"
const DoctorRegistration = lazy(()=>import('../features/doctor-multistep-register/index'))
const DoctorLogin = lazy(()=>import('../features/login/index'))
const Auth = lazy(()=>import("../components/Auth/AuthCard"))
import { DoctorAccountActions } from '../data/DoctorAccountActions'
const LoginRoutes = () => {
  return (
    <Routes>
        <Route path='/account'>
            <Route path='doctor'>
              <Route path=''  element={<Auth links={DoctorAccountActions}/>}/>
              <Route path='register'element={<DoctorRegistration/>}/>
              <Route path='login'element={<DoctorLogin/>}/>
              </Route>
        </Route>
    </Routes>
  )
}

export default LoginRoutes