import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import { LinkTab } from "./LinkTab";
import { Outlet } from "react-router-dom";
import { doctorProfileActions } from "../../data/DoctorProfileActions";
export const OptionTab = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{display:"flex" , justifyContent:"center",marginY:2}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          {
            doctorProfileActions.map(({name,link},index)=>{
              return <LinkTab value={index} key={name} label={name} to={link}/>
            })
          }
        </Tabs>
      </Box>
      <Outlet/>
    </>
  );
};
