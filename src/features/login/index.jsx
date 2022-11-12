import {lazy, Suspense} from 'react'
import { LoginContextProvider } from './context/LoginContextProvider'
const Loginform = lazy(()=>import("../login/components/LogInForm"))
export default function LoginForm()  {
  return (
    <Suspense>
        <LoginContextProvider>
            <Loginform/>
        </LoginContextProvider>
    </Suspense>
  )
}
