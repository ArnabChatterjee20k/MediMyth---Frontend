import { createContext, useContext, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useNotificationContext } from "../../../contexts/ToastContextProvider/NotificationContextProvider";
import { useSaveTokenQuery } from "../../../services/useSaveTokenQuery";
// import { useNavigation } from "react-router-dom";
import { useDoctorLoginQuery } from "../services/useDoctorLoginQuery";

const LoginContext = createContext();

export const useLoginContext = () => useContext(LoginContext);

export const LoginContextProvider = ({ children }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { isFetching, refetch, error } = useDoctorLoginQuery(data);

  const { notify } = useNotificationContext();

  const navigate = useNavigate();

  const saveToStorage = useSaveTokenQuery();

  const login = async () => {
    const { error, status, data: tokenData } = await refetch();
    if (status === "success") {
      const { token: authToken } = tokenData;
      if (saveToStorage({ authToken })) {
        notify("success", "success");
        navigate("/doctor/profile");
      } else {
        notify("some problems occurred", "error");
      }
    }

    if (status === "error") {
      notify(error.res, "error");
    }
  };

  return (
    <LoginContext.Provider value={{ data, setData, login, isFetching }}>
      {children}
    </LoginContext.Provider>
  );
};
