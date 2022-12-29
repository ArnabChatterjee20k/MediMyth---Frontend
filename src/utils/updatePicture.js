import { serverAddress } from "../data/Constants";
import Fetcher from "./fetcher";

export default function updatePicture(body, accessToken) {
  return new Fetcher("doctor/picture").fetcher({
    method: "PUT",
    body: body,
    headers: {
      "access-token": accessToken,
    },
  });
}
