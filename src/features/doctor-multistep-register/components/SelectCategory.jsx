import { useCallback } from "react";
import MenuSelect from "../../../components/ui/MenuSelect";
import { useRegisterContext } from "../context/RegisterContextProvider";
import MenuItem from "@mui/material/MenuItem";

export default function SelectCategory({ categories }) {
  const { data, setData } = useRegisterContext();

  const handleChange = useCallback(
    (e) => {
      setData((prevData) => ({ ...prevData, "category": e.target.value }));
    },
    [categories]
  );
  return (
    <MenuSelect value={data["category"]} onChange={handleChange} name="Select Your Category" required={true}>
      {categories.map(({ category, id }) => {
        return (
            <MenuItem key={id} value={category}>
              {category}
            </MenuItem>
        );
      })}
      <MenuItem value="other">
              Other....
            </MenuItem>
    </MenuSelect>
  );
}
