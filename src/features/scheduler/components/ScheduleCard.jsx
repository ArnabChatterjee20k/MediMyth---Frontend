import { useState, useCallback } from "react";
import useDeleteSchedule from "../services/useDeleteSchedule";

import EditCards from "../../../components/ui/EditCards";

import { useAuthUser } from "react-auth-kit";

import PropTypes from "prop-types";

export default function ScheduleCard({ id, header, subHeader, content }) {
  const authUser = useAuthUser();
  const token = authUser()?.token;

  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { deleteScheduleWithId } = useDeleteSchedule();

  // to be sent to the clipboard
  const options = [
    {
      label: "Delete",
      onClick: (deleteId) => {
        console.log(deleteId);
        deleteScheduleWithId(deleteId, token);
        handleClose();
      },
    },
  ];

  return (
    <EditCards
      id={id}
      content={content}
      header={header}
      subHeader={subHeader}
      options={options}
    />
  );
}

ScheduleCard.prototype = {
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
