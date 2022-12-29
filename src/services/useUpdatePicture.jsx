import { useMutation } from "@tanstack/react-query";
import { useAuthUser } from "react-auth-kit";
import { useNotificationContext } from "../contexts/ToastContextProvider/NotificationContextProvider";
import updatePicture from "../utils/updatePicture";

export default function useUpdatePicture() {
    const user = useAuthUser()
    const token = user()?.token
    const request = useMutation((body) => updatePicture(body,token));

  const { notify } = useNotificationContext();

  function updateProfilePicture(body) {
    const response = request.mutate(body, {
      onSuccess: (data) => {
        notify("Profile Picture Updated","success");
      },
      onError: (err) => {
        try {
          const { res } = err;
          res ? notify(res, "error") : notify("some error occured!", "error");
        } catch {
          notify("some error occured!", "error");
        }
      }
    });
  }

  return {updateProfilePicture}
}
