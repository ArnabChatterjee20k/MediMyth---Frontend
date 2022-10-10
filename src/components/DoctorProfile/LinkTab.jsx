import Tab from "@mui/material/Tab";
import {Link} from 'react-router-dom'
import { PrimaryTextColor } from "../../assets/styles/DefaultProperties";
export const LinkTab = (props)=> {
  return (
    <Tab
      component={Link}
      sx={{fontSize:"1.2rem",fontWeight:"700",paddingInline:"2em"}}
      {...props}
    />
  );
}
