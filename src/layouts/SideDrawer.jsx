import React from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import { PrimaryLogo } from "../components/Logo/PrimaryLogo";
import { SiteName } from "../data/Constants";
import  Typography  from "@mui/material/Typography";
import ListItemButton from '@mui/material/ListItemButton'
/**
 *
 * @param {Array} links Links must be an array of element. Element is suggested as link can <a></a> as well as <Link></Link>
 * @param {boolean} drawerOpen Better to provide state to control the behaviour of the of the drawer
 * @param {Function} toggleDrawer To toggle the drawerOpen state
 */
const SideDrawer = ({ links, drawerOpen, toggleDrawer }) => {
  return (
    <SwipeableDrawer
      sx={{
        "& .MuiDrawer-paper": { minWidth: "40vw" },
      }}
      open={drawerOpen}
      onOpen={toggleDrawer}
      onClose={toggleDrawer}
    >
      <List>
        <Stack marginBottom={2}>
          <PrimaryLogo
            text={SiteName}
            paddingBlock={1}
            paddingLeft={2}
            paddingRight={4}
          />
          <Divider sx={{ borderColor: "#000000ba" }} />
        </Stack>
        {links?.map((element, index) => (
          <>
            <ListItem>
              <Typography fontSize="1.5rem" fontWeight="bold">
                {element}
              </Typography>
              <Divider sx={{ borderColor: "#00000052" }} />
            </ListItem>
          </>
        ))}
      </List>
    </SwipeableDrawer>
  );
};

SideDrawer.propTypes = {};

export default SideDrawer;
