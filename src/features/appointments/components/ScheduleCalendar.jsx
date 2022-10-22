import { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import Stack from "@mui/material/Stack";
import { getWeekDay, getDifferenceDates } from "../../../utils/dateTime";
import { DateFormat } from "../../../data/Constants";
import { PickersDay } from "@mui/x-date-pickers/";
import { getWeek, getWeekOfMonth } from "date-fns";
import { useAppointment } from "../context/AppointmentContextProvider";
import Typography  from "@mui/material/Typography";

const dummyData = [
  {
    address: "dsdff",
    appointment_data: [1, 2],
    booking_end: 2,
    booking_start: 1,
    clinic_name: "sdfd",
    day: 2,
    fees: null,
    id: 1,
    medical_shop: "sdf",
    patient_limit: null,
    phone_no: "9812121212",
    scheduled_data: 1,
    slot_end: "05:30:12",
    slot_start: "05:00:00",
    specific_week: 3,
  },
  {
    address: "dsdff",
    appointment_data: [1, 2],
    booking_end: 2,
    booking_start: 1,
    clinic_name: "sdfd",
    day: 2,
    fees: null,
    id: 1,
    medical_shop: "sdf",
    patient_limit: null,
    phone_no: "9812121212",
    scheduled_data: 1,
    slot_end: "11:30:12",
    slot_start: "10:00:00",
    specific_week: 3,
  },
  {
    address: "dsdff",
    appointment_data: [1, 2],
    booking_end: 2,
    booking_start: 1,
    clinic_name: "sdfd",
    day: 4,
    fees: null,
    id: 1,
    medical_shop: "sdf",
    patient_limit: null,
    phone_no: "9812121212",
    scheduled_data: 1,
    slot_end: "05:30:12",
    slot_start: "05:00:00",
    specific_week: 3,
  },
  {
    address: "dsdff",
    appointment_data: [1, 2],
    booking_end: 1,
    booking_start: 30,
    clinic_name: "sdfd",
    day: 6,
    fees: null,
    id: 1,
    medical_shop: "sdf",
    patient_limit: null,
    phone_no: "9812121212",
    scheduled_data: 1,
    slot_end: "05:30:12",
    slot_start: "05:00:00",
    specific_week: null,
  },
  {
    address: "dsdff",
    appointment_data: [1, 2],
    booking_end: 1,
    booking_start: 30,
    clinic_name: "sdfd",
    day: 6,
    fees: null,
    id: 1,
    medical_shop: "sdf",
    patient_limit: null,
    phone_no: "9812121212",
    scheduled_data: 1,
    slot_end: "02:30:12",
    slot_start: "03:00:00",
    specific_week: null,
  },
  {
    address: "dsdff",
    appointment_data: [1, 2],
    booking_end: 1,
    booking_start: 90,
    clinic_name: "sdfd",
    day: 3,
    fees: null,
    id: 1,
    medical_shop: "sdf",
    patient_limit: null,
    phone_no: "9812121212",
    scheduled_data: 1,
    slot_end: "05:30:12",
    slot_start: "05:00:00",
    specific_week: 4,
  },
];
// creating this dataStructure to access the ORDERED_SCHEDULE easily and accessing data becomes more cleaner using key value pair
const ORDERED_SCHEDULE = {};
dummyData.map((element) => {
  if (ORDERED_SCHEDULE[element.day]) {
    ORDERED_SCHEDULE[element.day].push(element);
  } else {
    ORDERED_SCHEDULE[element.day] = [element];
  }
});
console.log(ORDERED_SCHEDULE);

export default function ScheduleCalendar() {
  const [value, setValue] = useState("");
  const {setAppointment} = useAppointment()
  if(dummyData.length!==0) return (
    <Stack justifyContent="center" alignItems="center">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          inputFormat={DateFormat}
          value={value}
          disableOpenPicker
          openTo="day"
          disableHighlightToday={true}
          renderDay={(date, selectedDays, pickersDayProps) => {
            // rendering the next dates and today if available
            const dateExists = ORDERED_SCHEDULE[getWeekDay(date)];
            let picker = null;
            dateExists &&
              getDifferenceDates(date, new Date()) >= 0 &&
              dateExists?dateExists.map((schedule) => {
                const isSelected = schedule.specific_week!==null?schedule.specific_week === getWeekOfMonth(date):true;
                const isInBookingRange = getDifferenceDates(date,new Date())<=schedule.booking_start;
                picker = (
                  <PickersDay
                    {...pickersDayProps}
                    day={date}
                    key={getWeekDay(date)}
                    selected={isSelected}
                    disabled={!isSelected}
                    sx={{
                      "&.MuiPickersDay-root":{
                        backgroundColor: isSelected && isInBookingRange && "success.main",
                      },
                      "&.MuiPickersDay-root:hover":{
                        backgroundColor:isSelected && isInBookingRange && "success.light"
                      },
                      "&.MuiPickersDay-root:active":{
                        backgroundColor:isSelected && isInBookingRange && "success.light",
                        border: isSelected && isInBookingRange && "2px solid black"
                      },
                      "&.MuiPickersDay-root:focus":{
                        backgroundColor:isSelected && isInBookingRange && "success.light",
                        border: isSelected && isInBookingRange && "2px solid black"
                      }
                    }}
                    onClick={() => {
                      console.log(dateExists);
                      isInBookingRange ? setAppointment(dateExists) : console.log("Out Of Booking range")
                    }}
                  />
                );
              }):picker = (
                <PickersDay
                  {...pickersDayProps}
                  day={date}
                  key={getWeekDay(date)}
                  disabled={true}
                  sx={{
                    "&.MuiPickersDay-root":{
                      backgroundColor:"white",
                    }
                  }}
                  onClick={() => console.log(getWeekOfMonth(date))}
                />
              );;
            return picker;
          }}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          // for setting the date using pencil
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Stack>
  );
  return <Typography fontSize={40}>No appointments</Typography>
}
