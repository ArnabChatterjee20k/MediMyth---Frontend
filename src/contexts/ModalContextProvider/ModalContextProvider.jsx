import { createContext , useState , useContext , useRef} from "react";

const ModalContext = createContext()

export const useModalContext =()=> useContext(ModalContext)

export default function ModalContextProvider({children}) {
    const [open,setOpen] = useState(false)
    const curComponent = useRef(null)
    const setComponent = (Component)=>{
        curComponent.current = Component
    }
    const handleOpen = (Component) => {
        setComponent(Component)
        setOpen(true)
    };
    const handleClose = () => {
        setComponent(null)
        setOpen(false)
    };
  return (  
    <ModalContext.Provider value={{open,handleOpen,handleClose,setComponent,Component:curComponent.current}}>
        {children}
    </ModalContext.Provider>
  )
}
