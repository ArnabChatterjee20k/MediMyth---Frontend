import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SideDrawer from "./SideDrawer";
import {
  PrimaryBgColor,
  PrimaryTextColor,
  SecondaryTextColor,
} from "../assets/styles/DefaultProperties";
import { PrimaryLogo } from "../components/Logo/PrimaryLogo";
import { SiteName } from "../data/Constants";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
/**
 *
 * @param {Array} links Links must be an array of element. Element is suggested as link can <a></a> as well as <Link></Link>
 */
const Navbar = ({ links }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <AppBar component="nav" sx={{ backgroundColor: PrimaryBgColor }}>
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Stack direction={"row"} alignItems="center" columnGap={4}>
          <PrimaryLogo text={SiteName} paddingBlock="0.5em" />
          {!isMobile && <Stack direction={"row"} alignItems="center">
            {links?.map((element, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <Typography color={SecondaryTextColor} fontWeight="bold" fontSize="1rem">{element}</Typography>
                </ListItem>
              </React.Fragment>
            ))}
          </Stack>}
        </Stack>
        {isMobile && <IconButton
          aria-label="open drawer"
          edge="end"
          size="large"
          onClick={() => setDrawerOpen((prev) => !prev)}
          sx={{ mr: 2}}
        >
          <MenuIcon fontSize="large" sx={{ color: PrimaryTextColor }} />
        </IconButton>}
      </Toolbar>
      {isMobile && <SideDrawer
        drawerOpen={drawerOpen}
        toggleDrawer={() => setDrawerOpen((prev) => !prev)}
        links={links}
      />}
    </AppBar>
  );
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Navbar;
