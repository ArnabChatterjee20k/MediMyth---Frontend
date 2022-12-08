import { useState, useCallback } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardContent from "@mui/material/CardContent";
import { SecondaryLogo } from "../Logo/SecondaryLogo";
import { eventCardColors } from "../../assets/styles/DefaultProperties";
import ClipboardMenu from "./ClipboardMenu";

import PropTypes from "prop-types";


export default function EditCards({ id, header, subHeader, content,options }) {

  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <Card
      sx={{
        maxWidth: { xs: "100%", md: "50%" },
        background:
          eventCardColors[Math.floor(Math.random() * eventCardColors.length)],
      }}
    >
      <CardHeader
        title={<SecondaryLogo text={header} />}
        subheader={subHeader}
        sx={{ paddingInline: "1rem", paddingBlock: "0.5rem" }}
        action={
          options && <IconButton aria-label="settings" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        }
      />
      {options && <ClipboardMenu
        id={id}
        open={menuOpen}
        handleClose={handleClose}
        options={options}
        anchorEl={anchorEl}
      />}
      <CardContent sx={{ paddingInline: "1rem", paddingBlock: "0.5rem" }}>
        {content}
      </CardContent>
    </Card>
  );
}

EditCards.prototype = {
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  options: PropTypes.object
};
