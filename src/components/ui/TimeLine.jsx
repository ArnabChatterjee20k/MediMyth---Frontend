import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import Typography from '@mui/material/Typography';
import EventMenuCard from "./EventMenuCard";

export default function TimeLine() {
  return (
    <Timeline >
      <TimelineItem>

        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          9:30 am
        </TimelineOppositeContent>
        
        <TimelineSeparator>
          <TimelineConnector /> {/* upperline */}
          <TimelineDot>
            <AccessTimeFilledRoundedIcon />
          </TimelineDot>
          <TimelineConnector /> {/* bottomline */}
        </TimelineSeparator>

        <TimelineContent sx={{ py: "12px", px: 2 }}>
            <EventMenuCard header="Sunday" subHeader="EveryWeek" content="9:30 am - 10:30 am"/>
        </TimelineContent>

      </TimelineItem>
      <TimelineItem>

        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          9:30 am
        </TimelineOppositeContent>
        
        <TimelineSeparator>
          <TimelineConnector /> {/* upperline */}
          <TimelineDot>
            <AccessTimeFilledRoundedIcon />
          </TimelineDot>
          <TimelineConnector /> {/* bottomline */}
        </TimelineSeparator>

        <TimelineContent sx={{ py: "12px", px: 2 }}>
            <EventMenuCard header="Sunday" subHeader="EveryWeek" content="9:30 am - 10:30 am"/>
        </TimelineContent>

      </TimelineItem>
      <TimelineItem>

        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          9:30 am
        </TimelineOppositeContent>
        
        <TimelineSeparator>
          <TimelineConnector /> {/* upperline */}
          <TimelineDot>
            <AccessTimeFilledRoundedIcon />
          </TimelineDot>
          <TimelineConnector /> {/* bottomline */}
        </TimelineSeparator>

        <TimelineContent sx={{ py: "12px", px: 2 }}>
            <EventMenuCard header="Sunday" subHeader="EveryWeek" content="9:30 am - 10:30 am"/>
        </TimelineContent>

      </TimelineItem>
    </Timeline>
  );
}
