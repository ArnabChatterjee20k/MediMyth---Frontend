import Tab from "@mui/material/Tab";
import {Link} from 'react-router-dom'
import { PrimaryTextColor } from "../../assets/styles/DefaultProperties";
export const LinkTab = (props)=> {
  return (
    <Tab
      component={Link}
      {...props}
    />
  );
}
