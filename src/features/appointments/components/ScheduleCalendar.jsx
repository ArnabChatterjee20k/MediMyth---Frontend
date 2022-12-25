import { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import Stack from "@mui/material/Stack";
import {
  getWeekDay,
  getDifferenceDates,
  getFormattedDate,
} from "../../../utils/dateTime";
import { DateFormat } from "../../../data/Constants";
import { PickersDay } from "@mui/x-date-pickers/";
import { getWeek, getWeekOfMonth } from "date-fns";
import { useAppointment } from "../context/AppointmentContextProvider";
import Typography from "@mui/material/Typography";
import {useSchedulesPatient,useSchedulesDoctor} from "../services/useSchedules";
import { useDoctorProfileContext } from "../../../contexts/DoctorProfileContextProvider/DoctorProfileContextProvider";
import { Navigate } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";

import Proptypes from "prop-types"
import { queryClient } from "../../../queryClient/queryClient";

export default function ScheduleCalendar({edit}) {
  const [value, setValue] = useState("");
  const { profile } = useDoctorProfileContext();
  const { setAppointment, appointmentDate, setAppointmentDate } =
    useAppointment();
  
  const auth = useAuthUser()
  const token = auth()?.token

  if(!edit && !profile?.current) return <Navigate to="/error"/>

  // refreshing the data for fresh data
  edit?queryClient.invalidateQueries(["doctor-schedules-token",token]):queryClient.invalidateQueries(["doctor-schedules-id",profile.current])

  const { data, isLoading } = edit?useSchedulesDoctor(token):useSchedulesPatient(profile.current);

  // creating this dataStructure to access the ORDERED_SCHEDULE easily and accessing data becomes more cleaner using key value pair
  const ORDERED_SCHEDULE = {};
  !isLoading &&
    data.map((element) => {
      if (ORDERED_SCHEDULE[element.day]) {
        ORDERED_SCHEDULE[element.day].push(element);
      } else {
        ORDERED_SCHEDULE[element.day] = [element];
      }
    });
  if (isLoading) return <h2>Loading</h2>;
  if (data.length !== 0)
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
              const dateExists = ORDERED_SCHEDULE[getWeekDay(date)];
              let picker = null;
              dateExists &&
              getDifferenceDates(date, new Date()) >= 0 &&
              dateExists
                ? dateExists.map((schedule) => {
                    const isSelected =
                      schedule.specific_week !== null
                        ? schedule.specific_week === getWeekOfMonth(date)
                        : true;
                    picker = (
                      <PickersDay
                        {...pickersDayProps}
                        day={date}
                        disableRipple
                        key={date}
                        selected={isSelected}
                        disabled={!isSelected}
                        sx={{
                          "&.MuiPickersDay-root": {
                            backgroundColor:
                              date.valueOf() === appointmentDate &&
                              "success.light",
                            border:
                              date.valueOf() === appointmentDate &&
                              "2px solid #212121",
                          },
                          "&.MuiPickersDay-root:active": {
                            backgroundColor: "success.light",
                            border: "2px solid black",
                          },
                          "&.MuiPickersDay-root:focus": {
                            backgroundColor: "success.light",
                          },
                        }}
                        onClick={() => {
                          setAppointmentDate(date.valueOf());
                          setAppointment(dateExists);
                        }}
                      />
                    );
                  })
                : (picker = (
                    <PickersDay
                      {...pickersDayProps}
                      day={date}
                      key={getWeekDay(date)}
                      disabled={true}
                      sx={{
                        "&.MuiPickersDay-root": {
                          backgroundColor: "white",
                        },
                      }}
                      onClick={() => console.log(getWeekOfMonth(date))}
                    />
                  ));
              return picker;
            }}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            // for setting the date using pencil
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        {
          <Typography
            sx={{ alignSelf: "self-start", marginInline: "2rem" }}
            fontSize={25}
            fontWeight="bold"
          >
            {appointmentDate
              ? getFormattedDate(new Date(appointmentDate), "dd/MM/yyyy")
              : "No date selected"}
          </Typography>
        }
      </Stack>
    );
  return <Typography fontSize={40}>No appointments</Typography>;
}

ScheduleCalendar.prototype = {
  edit:Proptypes.bool
}

ScheduleCalendar.defaultProps = {
  edit:false
}