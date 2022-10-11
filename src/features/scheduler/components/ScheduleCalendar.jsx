import { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import Stack from "@mui/material/Stack";
import {
  getWeekDay,
  getDifferenceDates
} from "../../../utils/dateTime";
import { DateFormat } from "../../../data/Constants";
import { PickersDay } from "@mui/x-date-pickers/";
import { getWeek, getWeekOfMonth } from "date-fns";
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
    slot_end: "05:30:12",
    slot_start: "05:00:00",
    specific_week: null,
  },
  {
    address: "dsdff",
    appointment_data: [1, 2],
    booking_end: 1,
    booking_start: 1,
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
];
// creating this dataStructure to access the schedules easily and accessing data becomes more cleaner using key value pair
const ORDERED_SCHEDULE = {};
dummyData.map((element) => {
  if (ORDERED_SCHEDULE[element.day]) {
    ORDERED_SCHEDULE[element.day].push(element);
  } else {
    ORDERED_SCHEDULE[element.day] = [element];
  }
});

export default function ScheduleCalendar() {
  const [value, setValue] = useState("");
  const [schedules, setSchedules] = useState(ORDERED_SCHEDULE);
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
          renderDay={(date, selectedDays, pickersDayProps) => {
            // rendering the next dates and today if available
            const dateExists = schedules[getWeekDay(date)];
            if (dateExists && getDifferenceDates(date, new Date()) >= 0) {
              return (
                <PickersDay
                  {...pickersDayProps}
                  day={date}
                  selected={true}
                  key={getWeekDay(date)}
                  onClick={()=>console.log(getWeekOfMonth(date))}
                />
              );
            } else {
              return (
                <PickersDay
                  {...pickersDayProps}
                  selected={false}
                  day={date}
                  disabled
                  key={date}
                />
              );
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
