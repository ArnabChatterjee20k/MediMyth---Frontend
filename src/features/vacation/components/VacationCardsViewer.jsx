import Stack  from "@mui/material/Stack";
import VacationCard from "./VacationCard";

export default function VacationCardsViewer({vacationData}) {
  return (
    <Stack justifyContent="center" alignItems="center" gap={4}>
        {
            vacationData.map(({end,start,id,reason,schedules})=>{
                return <VacationCard id={id} header={`${new Date(start).toLocaleDateString("en-GB")} - ${new Date(end).toLocaleDateString("en-GB")}`} subHeader={reason?reason:"reason not mentioned"} content={`Places cancelled - ${schedules.length}`}/>
            })
        }
    </Stack>
  )
}
