import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Proptypes from "prop-types"
import Chip from '@mui/material/Chip';
import CheckIcon from '@mui/icons-material/Check';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import { getDifferenceDates } from "../../../utils/dateTime";
const EventCards = ({start,end,address,cardAction,date,booking_start}) => {
  const isInBookingRange = getDifferenceDates(new Date(date),new Date())<=booking_start;
  return (
    <Card variant="outlined" sx={{display:"flex",justifyContent:"space-between",flexDirection:{xs:"column",sm:"row"}}}>
      <CardContent>
      <Chip
        label={isInBookingRange?"Booking available":"booking unavailable"}
        clickable={false}
        sx={{backgroundColor:isInBookingRange?"success.light":"error.light",color:"white"}}
      />
        <Typography sx={{ marginBlock: 1.5 }} color="text.secondary">
          {start} - {end?end:"Not mentioned"}
        </Typography>
        <Typography variant="body2">
          {address}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button disabled={!isInBookingRange} onClick={cardAction} size="small" variant="contained" >Book</Button>
      </CardActions>
    </Card>
  );
};

EventCards.prototype = {
  start:Proptypes.string,
  end:Proptypes.string,
  address:Proptypes.string,
  cardAction:Proptypes.func,
  date:Proptypes.number.isRequired,// primitive value of a date object
  booking_start:Proptypes.number.isRequired
}

EventCards.defaultProps={
  start:"Starting time",
  end:"Ending time",
  address:"Address of the clinic",
  cardAction:()=>alert("Card action"),
}

export default EventCards;
