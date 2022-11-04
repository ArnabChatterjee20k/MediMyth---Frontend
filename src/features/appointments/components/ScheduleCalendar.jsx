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
    "address": "dsdff",
    "appointment_data": [
      {
        "appointment_date": "2022-11-15",
        "id": 5
      },
      {
        "appointment_date": "2022-11-15",
        "id": 6
      },
      {
        "appointment_date": "2012-08-02",
        "id": 7
      },
      {
        "appointment_date": "2012-08-02",
        "id": 8
      }
    ],
    "booking_end": 2,
    "booking_start": 7,
    "clinic_name": "sdfd",
    "day": 6,
    "fees": null,
    "id": 1,
    "medical_shop": "sdf",
    "patient_limit": 5,
    "phone_no": "9812121212",
    "slot_end": "05:30:12",
    "slot_start": "05:00:00",
    "specific_week": 4
  },
  {
    "address": "lsdfj",
    "appointment_data": [],
    "booking_end": 2,
    "booking_start": 7,
    "clinic_name": "sdfd",
    "day": 1,
    "fees": null,
    "id": 3,
    "medical_shop": "sdf",
    "patient_limit": 3,
    "phone_no": "9812121212",
    "slot_end": null,
    "slot_start": "07:00:00",
    "specific_week": null
  },
  {
    "address": "lsdfj",
    "appointment_data": [
      {
        "appointment_date": "2022-11-08",
        "id": 9
      },
      {
        "appointment_date": "2022-11-08",
        "id": 10
      },
      {
        "appointment_date": "2022-11-08",
        "id": 11
      },
      {
        "appointment_date": "2022-11-08",
        "id": 12
      },
      {
        "appointment_date": "2022-11-15",
        "id": 13
      }
    ],
    "booking_end": 2,
    "booking_start": 30,
    "clinic_name": "sdfd",
    "day": 2,
    "fees": null,
    "id": 4,
    "medical_shop": "sdf",
    "patient_limit": 4,
    "phone_no": "9812121212",
    "slot_end": null,
    "slot_start": "07:00:00",
    "specific_week": null
  },
  {
    "address": "lsdfj",
    "appointment_data": [],
    "booking_end": 2,
    "booking_start": 7,
    "clinic_name": "sdfd",
    "day": 2,
    "fees": null,
    "id": 5,
    "medical_shop": "sdf",
    "patient_limit": null,
    "phone_no": "9812121212",
    "slot_end": null,
    "slot_start": "09:00:00",
    "specific_week": null
  }
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

export default function ScheduleCalendar() {
  const [value, setValue] = useState("");
  const {setAppointment,appointmentDate,setAppointmentDate} = useAppointment()
  
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
                picker = (
                  <PickersDay
                    {...pickersDayProps}
                    day={date}
                    disableRipple
                    key={date}
                    selected={isSelected}
                    disabled={!isSelected}
                    sx={{
                      "&.MuiPickersDay-root":{
                        backgroundColor:date.valueOf() === appointmentDate && "success.light",
                        border:date.valueOf() === appointmentDate && "2px solid #212121"
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
                      setAppointmentDate(date.valueOf())
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
              );
            return picker;
          }}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          // for setting the date using pencil
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      {<Typography sx={{alignSelf:"self-start",marginInline:"2rem"}} fontSize={25} fontWeight="bold">{appointmentDate ? getFormattedDate(new Date(appointmentDate),"dd/MM/yyyy"):"No date selected"}</Typography>}
    </Stack>
  );
  return <Typography fontSize={40}>No appointments</Typography>
}
