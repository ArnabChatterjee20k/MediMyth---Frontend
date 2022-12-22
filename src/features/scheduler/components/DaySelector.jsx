import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import { days } from "../../../data/days";

import { useScheduleData } from "../context/ScheduleContextProvider";
const DaySelector = () => {
  const { scheduleData, handleScheduleData , handleSelection } = useScheduleData();

  return (
    <Stack width={{ xs: "80%", sm: "60%" }}>
      <FormControl>
        <FormLabel>Days</FormLabel>
        <Select
          value={scheduleData.day}
          name="day"
          onChange={handleSelection}
          multiple
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={Object.keys(days)[value]} />
              ))}
            </Box>
          )}
        >
          {Object.keys(days).map((day) => {
            return (
              <MenuItem key={day} value={days[day]}>
                <Checkbox checked={scheduleData.day.indexOf(days[day]) > -1} />
                <ListItemText primary={day} />
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default DaySelector;