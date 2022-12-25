import { createContext, useContext, useState } from "react";
import { useSnackbar } from "notistack";

const NotificationContext = createContext()

export const useNotificationContext = ()=>useContext(NotificationContext)

const NotificationContextProvider = ({children}) => {
   
    const {enqueueSnackbar,closeSnackbar} = useSnackbar()

    function notify(message,status) {
      const notificationId = enqueueSnackbar(message,{variant:status,onClick: () => closeSnackbar(notificationId)})
    }
  return (
      <NotificationContext.Provider value={{notify}}>
        {children}
      </NotificationContext.Provider>
  )
}

export default NotificationContextProvider