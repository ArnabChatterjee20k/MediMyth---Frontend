import TextField  from "@mui/material/TextField"
import { useRegisterContext } from "../context/RegisterContextProvider"
import PropTypes from "prop-types"

const Input = ({name,type,value,placeholder,label,changeHandler,errorText,errorPattern,optional,...props}) => {
    const {data,setData} = useRegisterContext();
    const handleChange = (e)=>{
        setData(prevData=>({...prevData,[e.target.name]:e.target.value}))
    }
    const inputValue = value || data[name];
    const validInput = new RegExp(errorPattern).test(inputValue); // for rendering error messages
    
    return (
    <TextField
        onChange={changeHandler || handleChange}
        name={name}
        value={inputValue}
        placeholder={placeholder}
        label={label}
        helperText={!validInput && errorText}
        required = {optional?false:true} // if optional present or true
        error={errorPattern && !validInput}
        inputProps={{pattern:errorPattern}}
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
    label:PropTypes.string.isRequired,
    errorText:PropTypes.string,
    errorPattern:PropTypes.string,
    optional:PropTypes.bool
}
export default Input