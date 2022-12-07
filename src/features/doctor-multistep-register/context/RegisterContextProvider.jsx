import { useMutation } from "@tanstack/react-query";
import { createContext, useState, useContext } from "react";
import { createDoctor } from "../utils/createDoctor";
import { useNotificationContext } from "../../../contexts/ToastContextProvider/NotificationContextProvider";
import { useSaveTokenQuery } from "../../../services/useSaveTokenQuery";
import { useNavigate } from "react-router-dom";
import { visibilityOptions } from "../data/visibilityOptions";

const RegisterContext = createContext();

export const useRegisterContext = () => useContext(RegisterContext);

const RegisterContextProvider = ({ children }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone_no: "",
    reg_no: "",
    address: "",
    category: "",
    password: "",
    reff_code: "",
    email_visibility: visibilityOptions["EveryOne"],
    reg_no_visibility: visibilityOptions["EveryOne"],
    phone_no_visibility: visibilityOptions["EveryOne"]
  });

  const [otp, setOTP] = useState("");

  // accessing notification
  const { notify } = useNotificationContext();

  const saveToStorage = useSaveTokenQuery();

  const navigate = useNavigate();

  // function for sending post request for creating doctor account
  const doctorRes = useMutation((body) =>
    createDoctor(data.phone_no, otp, body).then((res) => res)
  );

  const sendOTP = () => {
    alert("sending otp to", data.phone_no);
  };

  const createAccount = () => {
    doctorRes.mutate(data, {
      onSuccess: async (res) => {
        const data = await res.json();
        const authToken = data.token
        const status = res.status;

        if (status == 200) {
          // receive the token and save it in the localstorage
          if (saveToStorage({authToken})) {
            notify("success", "success");
            navigate("/doctor/profile");
          } else {
            notify("some problems occurred", "error");
          }
        } else {
          data.status && notify(data.status, "error");
        }
      },
      onError: (err) => {
        notify("Error Plz try again later", "error");
      },
    });
  };

  return (
    <RegisterContext.Provider
      value={{ data, setData, otp, setOTP, sendOTP, createAccount }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContextProvider;
