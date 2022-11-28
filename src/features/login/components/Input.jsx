import Field from "../../../components/Form/Field";
import PropTypes from "prop-types"
import { useLoginContext } from "../context/LoginContextProvider"

const Input = ({name,value,placeholder,label,changeHandler,errorText,errorPattern,optional,...props}) => {
    const {data,setData} = useLoginContext();
    const handleChange = (e)=>{
        setData(prevData=>({...prevData,[e.target.name]:e.target.value}))
    }
    const inputValue = value || data[name];
    const validInput = new RegExp(errorPattern).test(inputValue);

    return (
    <Field
        onChange={handleChange}
        name={name}
        value={inputValue}
        placeholder={placeholder}
        label={label}
        helperText={!validInput && errorText}
        required = {optional || true} // if optional present or true
        showError={errorPattern && !validInput}
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