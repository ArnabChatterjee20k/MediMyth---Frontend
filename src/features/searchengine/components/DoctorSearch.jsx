import client from "../client/client";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

export default function DoctorSearch() {
  return (
    <InstantSearch searchClient={client} indexName="demo_ecommerce">
      <SearchBox />
      <Hits />
    </InstantSearch>
  );
}
