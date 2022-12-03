import client from "../client/client";
import { InstantSearch} from "react-instantsearch-dom";
import SearchBar from "./SearchBar";
import Stack from "@mui/material/Stack";
import CardsHolder from "./CardsHolder";

export default function DoctorSearch() {
  return (
    <InstantSearch routing={true} searchClient={client} indexName="medimyth">
      <Stack alignItems="center" width="100%" gap={4}>
        <SearchBar />
        <CardsHolder />
      </Stack>
    </InstantSearch>
  );
}