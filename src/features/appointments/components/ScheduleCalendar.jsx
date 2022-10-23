import { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import Stack from "@mui/material/Stack";
import { getWeekDay, getDifferenceDates,getFormattedDate } from "../../../utils/dateTime";
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
  // will be storing the primitive value of date object.
  // Storing primitive value here to cut down the problem of referential equality of objects
  // valueOf will give primitive values
  // ref used to avoid useless re renders
  const selected = useRef(null)
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
                    key={date}
                    selected={isSelected}
                    disabled={!isSelected}
                    sx={{
                      "&.MuiPickersDay-root":{
                        backgroundColor:date.valueOf() === selected.current && "success.light",
                        border:date.valueOf() === selected.current && "2px solid #212121"
                      },
                      "&.MuiPickersDay-root:hover":{
                        backgroundColor:"success.light"
                      },
                      "&.MuiPickersDay-root:active":{
                        backgroundColor:"success.light",
                        border: "2px solid black"
                      },
                      "&.MuiPickersDay-root:focus":{
                        backgroundColor:"success.light",
                      }
                    }}
                    onClick={() => {
                      selected.current = date.valueOf()
                      setAppointment(dateExists)
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
      {selected.current && <Typography sx={{alignSelf:"self-start",marginInline:"2rem"}} fontSize={25} fontWeight="bold">{getFormattedDate(new Date(selected.current),"dd/MM/yyyy")}</Typography>}
    </Stack>
  );
  return <Typography fontSize={40}>No appointments</Typography>
}
