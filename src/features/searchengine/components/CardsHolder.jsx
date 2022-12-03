import Stack  from "@mui/material/Stack"
import SearchedDoctorCard from "./SearchedDoctorCard"
import { connectInfiniteHits } from "react-instantsearch-dom"
function Holder({hits}) {
  return (
    <Stack gap={5}>
        {
            hits.map(({name,profile_pic,id,category})=>{
                return <SearchedDoctorCard name={name} profile_pic={profile_pic} id={id} category={category}/>
            })
        }
    </Stack>
  )
}

const CardsHolder =  connectInfiniteHits(Holder)

export default CardsHolder;
