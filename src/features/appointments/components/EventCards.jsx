import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Proptypes from "prop-types"
const EventCards = ({start,end,address,cardAction,disabled}) => {
  return (
    <Card variant="outlined" sx={{display:"flex",justifyContent:"space-between",flexDirection:{xs:"column",sm:"row"}}}>
      <CardContent>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {start} - {end?end:"Not mentioned"}
        </Typography>
        <Typography variant="body2">
          {address}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button disabled={disabled} onClick={cardAction} size="small" variant="contained" >Book</Button>
      </CardActions>
    </Card>
  );
};

EventCards.prototype = {
  start:Proptypes.string,
  end:Proptypes.string,
  address:Proptypes.string,
  cardAction:Proptypes.func,
  disabled:Proptypes.bool
}

EventCards.defaultProps={
  start:"Starting time",
  end:"Ending time",
  address:"Address of the clinic",
  cardAction:()=>alert("Card action"),
  disabled:false
}

export default EventCards;
