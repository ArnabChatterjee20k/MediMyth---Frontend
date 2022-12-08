import { useQuery } from "@tanstack/react-query";
import Fetcher from "../utils/fetcher";

export default function useCategories() {
  const endpoint = "category/"
  const fetcher = new Fetcher(endpoint)
  return useQuery(["doctor-categories"],()=>fetcher.getFetcherUsers())
}
