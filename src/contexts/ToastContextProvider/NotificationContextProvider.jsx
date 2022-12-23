import { createContext, useContext, useState } from "react";
import { SnackbarProvider, useSnackbar } from "notistack";

const NotificationContext = createContext()

export const useNotificationContext = ()=>useContext(NotificationContext)

const NotificationContextProvider = ({children}) => {
   
    const {enqueueSnackbar} = useSnackbar()

    function notify(message,status) {
      enqueueSnackbar(message,{variant:status})
    }
    function handleClose(event,reason){
      setOpen(false);
    }
  return (
      <NotificationContext.Provider value={{notify}}>
        {children}
      </NotificationContext.Provider>
  )
}

export default NotificationContextProvider