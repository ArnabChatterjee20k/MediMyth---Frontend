import TextField  from "@mui/material/TextField"
import { useRegisterContext } from "../context/RegisterContextProvider"
import PropTypes from "prop-types"

const Input = ({name,type,value,placeholder,label,changeHandler,...props}) => {
    const {data,setData} = useRegisterContext();
    const handleChange = (e)=>{
        setData(prevData=>({...prevData,[e.target.name]:e.target.value}))
    }
    return (
    <TextField
        onChange={changeHandler || handleChange}
        name={name}
        value={value || data[name]}
        placeholder={placeholder}
        label={label}
        InputLabelProps={{ shrink: true }}
        {...props}
      />
  )
}

Input.prototype = {
    name:PropTypes.string.isRequired,
    value:PropTypes.string,
    type:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired
}
export default Input