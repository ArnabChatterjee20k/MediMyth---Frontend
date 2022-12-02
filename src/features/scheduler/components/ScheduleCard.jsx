import { useState, useCallback } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { eventCardColors } from "../../../assets/styles/DefaultProperties";
import CardContent from "@mui/material/CardContent";
import { SecondaryLogo } from "../../../components/Logo/SecondaryLogo";
import ClipboardMenu from "../../../components/ui/ClipboardMenu";
import useDeleteSchedule from "../services/useDeleteSchedule";

import { useAuthUser } from "react-auth-kit";

import PropTypes from "prop-types";


export default function ScheduleCard({ id, header, subHeader, content }) {
  const authUser = useAuthUser()
  const token = authUser()?.token

  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const {deleteScheduleWithId} = useDeleteSchedule()

  // to be sent to the clipboard
  const options = [
    {
      label: "Delete",
      onClick: (deleteId) => {
        console.log(deleteId);
        deleteScheduleWithId(deleteId,token)
        handleClose();
      },
    },
  ];
  
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
          <IconButton aria-label="settings" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <ClipboardMenu
        id={id}
        open={menuOpen}
        handleClose={handleClose}
        options={options}
        anchorEl={anchorEl}
      />
      <CardContent sx={{ paddingInline: "1rem", paddingBlock: "0.5rem" }}>
        {content}
      </CardContent>
    </Card>
  );
}

ScheduleCard.prototype = {
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
