import { connectSearchBox } from "react-instantsearch-dom";
import { useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import TextField from "@mui/material/TextField";

function SearchBox({
  refine
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    if (debouncedSearchTerm) {
      refine(searchTerm);
    } else {
      refine("");
    }
  }, [debouncedSearchTerm]);

  const searchHandler = (e)=>{
    setSearchTerm(e.target.value)
  }
  return <TextField sx={{width:{xs:"100%",sm:"80%",md:"60%"}}} onChange={searchHandler} placeholder="Search by name,category,etc"/>;
}

const SearchBar = connectSearchBox(SearchBox);
export default SearchBar;