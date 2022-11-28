import TextField  from "@mui/material/TextField"
import PropTypes from "prop-types"

const Field = ({name,value,placeholder,label,changeHandler,errorText
    ,showError,optional,...props}) => {
    return (
    <TextField
        onChange={changeHandler}
        name={name}
        value={value}
        placeholder={placeholder}
        label={label}
        helperText={!showError && errorText}
        required = {optional || true} // if optional present or true
        error={showError}
        InputLabelProps={{ shrink: true }}
        {...props}
      />
  )
}

Field.prototype = {
    name:PropTypes.string.isRequired,
    value:PropTypes.string,
    type:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    errorText:PropTypes.string,
    optional:PropTypes.bool,
    showError : PropTypes.bool
}
export default Field