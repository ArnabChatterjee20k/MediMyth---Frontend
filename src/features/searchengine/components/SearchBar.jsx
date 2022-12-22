import { connectSearchBox } from "react-instantsearch-dom";
import { useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
function SearchBox({
  refine
}) {
  const {query} = useParams()
  const defaultSearch = query?query:""
  const [searchTerm, setSearchTerm] = useState(defaultSearch);
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
  if(query){
    return <h3>Your Results for {query}</h3>
  }
  return <TextField sx={{width:{xs:"100%",sm:"80%",md:"60%"}}} onChange={searchHandler} placeholder="Search by name,category,etc"/>;
}

const SearchBar = connectSearchBox(SearchBox);
export default SearchBar;