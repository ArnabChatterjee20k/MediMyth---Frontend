import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { eventCardColors } from "../../assets/styles/DefaultProperties";
import CardContent  from "@mui/material/CardContent";
import { SecondaryLogo } from "../Logo/SecondaryLogo";

import PropTypes from 'prop-types'

export default function ScheduleCard({ header, subHeader, content }) {
  return (
    <Card sx={{ maxWidth: {xs:"100%",md:"50%"} , background:eventCardColors[Math.floor(Math.random()*eventCardColors.length)]}}>
      <CardHeader
        title={<SecondaryLogo text={header}/>}
        subheader={subHeader}
        sx={{paddingInline:"1rem",paddingBlock:"0.5rem"}}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent sx={{paddingInline:"1rem",paddingBlock:"0.5rem"}}>{content}</CardContent>
    </Card>
  );
}

ScheduleCard.prototype = {
    header : PropTypes.string.isRequired,
    subHeader: PropTypes.string.isRequired,
    content : PropTypes.string.isRequired
}