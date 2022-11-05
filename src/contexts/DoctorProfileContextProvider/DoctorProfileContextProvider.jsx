import {useRef,useContext,createContext} from "react"

const DoctorProfileContext = createContext()

export const useDoctorProfileContext = ()=> useContext(DoctorProfileContext)
const DoctorProfileContextProvider = ({children}) => {
    const profile = useRef(null)
    const setProfile = (profileInfo)=>profile.current = profileInfo 
    // profile can be both id or email
    // used ref as we dont need to render the app if it changes
  return (
    <DoctorProfileContext.Provider value={{profile,setProfile}}>
        {children}
    </DoctorProfileContext.Provider>
  )
}

export default DoctorProfileContextProvider