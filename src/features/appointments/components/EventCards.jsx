import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Proptypes from "prop-types";
import AppointmentCard from "../../../components/ui/AppointmentCard";
import {
  getDifferenceDates,
  getFormattedDate,
  subtractHoursFromDate,
  isToday,
  isTimeBeforeNow,
  format12hour,
} from "../../../utils/dateTime";
import combineTodayWithTime from "../utils/combineTodayWithTime";
const EventCards = ({
  id,
  start,
  end,
  address,
  cardAction,
  date,
  booking_start,
  booking_end,
  limit,
  appointment_data,
  buttonText,
  edit,
}) => {
  function checkBookingEnd() {
    if (isToday(date)) {
      const dateObj = new Date(date);
      // combining date and booking_start
      const slotStart = combineTodayWithTime(start);
      // subtracting ending hours from slotStart
      const dateAfterSubtracting = subtractHoursFromDate(
        slotStart,
        booking_end
      );
      // comparing the dateAfterSubtracting and currentTime
      const bookingOver = isTimeBeforeNow(dateAfterSubtracting);
      return !bookingOver;
    }
    return false;
  }

  const beforeBookingStart =
    getDifferenceDates(new Date(date), new Date()) <= booking_start;

  // filtering the number of the appointments of the selected date and then subtracting it with limit
  // if 0 then no more seats
  // if negative value is coming then the limit is null.
  const seats = appointment_data.filter((appointment) => {
    const selectedDate = new Date(date);
    const scheduleDate = new Date(appointment?.appointment_date);
    return (
      selectedDate.getDate() === scheduleDate.getDate() &&
      selectedDate.getMonth() === scheduleDate.getMonth() &&
      selectedDate.getFullYear() === scheduleDate.getFullYear()
    );
  }).length;

  const isSeatsAvailable = limit ? limit - seats !== 0 : true;

  const isInBookingRange =
    beforeBookingStart && !checkBookingEnd() && isSeatsAvailable;

  let helperText = ""; // by default nothing
  if (!isInBookingRange && !isSeatsAvailable) helperText = "No Seats Available";
  if (!isInBookingRange) helperText = "Booking Not Started or Over";

  return (
    <AppointmentCard
      active={isInBookingRange && isSeatsAvailable}
      patientLimit={limit}
      totalPatient={seats}
      time={`${format12hour(start)} - ${
        end ? format12hour(end) : "Not mentioned"
      }`}
      buttonText={buttonText}
      cardAction={cardAction}
      edit={edit}
      helperText={helperText}
    />
  );
};

EventCards.prototype = {
  start: Proptypes.string,
  end: Proptypes.string,
  address: Proptypes.string,
  cardAction: Proptypes.func,
  date: Proptypes.number.isRequired, // primitive value of a date object
  booking_start: Proptypes.number.isRequired,
  buttonText: Proptypes.string.isRequired,
  edit: Proptypes.bool.isRequired,
};

EventCards.defaultProps = {
  start: "Starting time",
  end: "Ending time",
  address: "Address of the clinic",
  buttonText: "Button Text",
  edit: false,
  cardAction: () => alert("Card action"),
};

export default EventCards;
