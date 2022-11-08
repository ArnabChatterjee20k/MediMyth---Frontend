import { useMutation } from "@tanstack/react-query";
import { createContext, useState, useContext } from "react";
import { createDoctor } from "../utils/createDoctor";
import { useNotificationContext } from "../../../contexts/ToastContextProvider/NotificationContextProvider";
import { useSignIn } from "react-auth-kit";

const RegisterContext = createContext();

export const useRegisterContext = () => useContext(RegisterContext);

const RegisterContextProvider = ({ children }) => {
  const signIn = useSignIn();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone_no: "",
    reg_no: "",
    address: "",
    category: "",
    password: "",
    reff_code: "",
  });

  const [otp, setOTP] = useState("");

  // accessing notification
  const { notify } = useNotificationContext();

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
        const status = res.status;

        if (status == 200) {
          // receive the token and save it in the localstorage
          if (
            signIn({
              token: data.token,
              expiresIn: 120,
              tokenType:"Bearer"
            })
          ) {
            notify("success", "success");
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
