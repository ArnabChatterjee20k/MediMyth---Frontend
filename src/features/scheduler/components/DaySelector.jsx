import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { days } from "../data/days";
import { useScheduleData } from "../context/ScheduleContextProvider";
import Stack from "@mui/material/Stack";
export const DaySelector = () => {
  const { scheduleData, handleScheduleData } = useScheduleData();
  return (
    <Stack width={{ xs: "80%", sm: "60%" }}>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Day</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="day"
          value={scheduleData.day}
          onChange={handleScheduleData}
          sx={{ flexDirection: "column", justifyContent: "flex-start" }}
        >
          {Object.keys(days).map((day) => {
            return (
              <FormControlLabel
                key={day}
                value={days[day]}
                control={<Radio />}
                label={day}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </Stack>
  );
};
