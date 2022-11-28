import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Proptypes from "prop-types";
import AppointmentCard from "../../../components/ui/AppointmentCard";
import {
  getDifferenceDates,
  subtractHoursFromDate,
  isToday,
  isTimeBeforeNow,
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
}) => {
  console.log(appointment_data);
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

  return (
    <AppointmentCard
      active={isInBookingRange && isSeatsAvailable}
      patientLimit={limit}
      totalPatient={seats}
      time={`${start} - ${end ? end : "Not mentioned"}`}
      cardAction={cardAction}
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
};

EventCards.defaultProps = {
  start: "Starting time",
  end: "Ending time",
  address: "Address of the clinic",
  cardAction: () => alert("Card action"),
};

export default EventCards;
