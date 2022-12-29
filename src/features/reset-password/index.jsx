import ResetPasswordContextProvider from "./context/ResetPasswordContextProvider";
import ResetPasswordForm from "./components/ResetPasswordForm";

import React from 'react'

export default function ResetPassword() {
  return (
    <ResetPasswordContextProvider>
        <ResetPasswordForm/>
    </ResetPasswordContextProvider>
  )
}
