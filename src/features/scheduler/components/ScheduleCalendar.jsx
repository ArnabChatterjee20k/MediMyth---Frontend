import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import Stack from "@mui/material/Stack";
import { getFormattedDate, getToday } from "../../../lib/Date-Time/datetime";
import { parseTimeStamps , getWeekDay } from "../../../lib/Date-Time/datetime";
import { format } from "date-fns";
import { DateFormat } from "../../../data/Constants";
import {PickersDay} from '@mui/x-date-pickers/';
const dummyData = [
  {
    address: "dsdff",
    appointment_data: [1, 2],
    booking_end: 2,
    booking_start: 7,
    clinic_name: "sdfd",
    day: 0,
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
    booking_start: 7,
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
    booking_start: 7,
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
    specific_week: null,
  },
];

const daysToRender = ()=>{
  const days = new Set();
  dummyData.map(e=>days.add(e.day))
  return [...days];
}

export default function ScheduleCalendar() {
  const [value, setValue] = React.useState("");
  return (
    <Stack justifyContent="center" alignItems="center">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          inputFormat={DateFormat}
          value={value}
          disableOpenPicker
          openTo="day"
          disableHighlightToday={true}
          renderDay={(date, selectedDays, pickersDayProps)=>{
            const days = daysToRender();
            if(days.includes(getWeekDay(date))){
              return <PickersDay {...pickersDayProps} day={date} selected={true} key={getWeekDay(date)} />
            }
            else{
              return <PickersDay {...pickersDayProps}  selected={false}  day={date} disabled  key={getWeekDay(date)} />
            }
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
}
