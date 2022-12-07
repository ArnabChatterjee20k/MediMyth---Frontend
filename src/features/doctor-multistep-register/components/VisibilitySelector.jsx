import MenuSelect from "../../../components/ui/MenuSelect";
import { useRegisterContext } from "../context/RegisterContextProvider";
import MenuItem from "@mui/material/MenuItem";
import { visibilityOptions } from "../data/visibilityOptions";
import { useCallback } from "react";

export default function VisibilitySelector({ contextField }) {
  const { data, setData } = useRegisterContext();

  const handleChange = useCallback(
    (e) => {
      setData((prevData) => ({ ...prevData, [contextField]: e.target.value }));
    },
    [contextField]
  );

  return (
    <MenuSelect
      name={contextField}
      value={data[contextField]}
      onChange={(e) => handleChange(e)}
    >
      {Object.keys(visibilityOptions).map((option) => (
        <MenuItem key={option} value={visibilityOptions[option]}>
          {option}
        </MenuItem>
      ))}
    </MenuSelect>
  );
}
