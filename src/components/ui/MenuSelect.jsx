import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";

import PropTypes from "prop-types"

/**
 * children should be MenuItem component from mui for better result
 */
export default function MenuSelect({name,value,onChange,required,children}) {
  return (
    <FormControl>
        <FormLabel>{name}</FormLabel>
        <Select
          value={value}
          name={name}
          onChange={onChange}
          required={required}
        >
          {children}
        </Select>
      </FormControl>
  )
}

MenuSelect.prototype = {
    value:PropTypes.any.isRequired,
    onChange : PropTypes.func.isRequired,
    name:PropTypes.string.isRequired,
    required:PropTypes.bool
}