import { createContext, useContext, useState } from "react";

const NotificationContext = createContext()

export const useNotificationContext = ()=>useContext(NotificationContext)

const NotificationContextProvider = ({children}) => {
    const [open,setOpen] = useState(false)
    const [content,setContent] = useState("")
    const [status,setStatus] = useState("")

    function notify(message,status) {
      setOpen(prevState => !prevState)
      setContent(message)
      setStatus(status)
    }
    function handleClose(){
      setOpen(prevState => !prevState)
    }
  return (
    <NotificationContext.Provider value={{open,content,status,notify,handleClose}}>
        {children}
    </NotificationContext.Provider>
  )
}

export default NotificationContextProvider