import client from "../client/client";
import { InstantSearch} from "react-instantsearch-dom";
import SearchBar from "./SearchBar";
import Stack from "@mui/material/Stack";
import CardsHolder from "./CardsHolder";
import { useParams } from "react-router-dom";

const index = import.meta.env.VITE_ALGOLIA_INDEX
export default function DoctorSearch() {
  return (
    <InstantSearch routing={true} searchClient={client} indexName={index}>
      <Stack alignItems="center" width="100%" gap={4}>
        <SearchBar />
        <CardsHolder />
      </Stack>
    </InstantSearch>
  );
}