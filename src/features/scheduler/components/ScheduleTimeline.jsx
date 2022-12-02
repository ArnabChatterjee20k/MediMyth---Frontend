import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import { days } from "../data/days";
import { weeks } from "../data/weeks";
import ScheduleCard from "./ScheduleCard";

export default function ScheduleTimeline({ scheduleData }) {
  return (
    <Timeline  sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: {
            xs:0,
            md:0.6
          },
          padding: 0,
        },
      }}>
      {scheduleData?.map(({id,specific_week,day,slot_start,slot_end},index) => (
        <TimelineItem key={index}>

          <TimelineSeparator>
            <TimelineConnector /> {/* upperline */}
            <TimelineDot>
              <AccessTimeFilledRoundedIcon />
            </TimelineDot>
            <TimelineConnector /> {/* bottomline */}
          </TimelineSeparator>

          <TimelineContent>
            <ScheduleCard
              id={id}
              header={Object.keys(days)[day]}
              subHeader={
                specific_week
                  ? Object.keys(weeks)[specific_week]
                  : "EveryWeek"
              }
              content={`${slot_start} - ${
                slot_end ? slot_end : "Not given"
              }`}
            />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
