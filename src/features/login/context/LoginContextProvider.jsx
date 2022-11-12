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
  const { data: token, isLoading, refetch } = useDoctorLoginQuery(data);

  const { notify } = useNotificationContext();

  const navigate = useNavigate();

  const saveToStorage = useSaveTokenQuery();

  const login = () => {
    refetch().then(async () => {
      const tokenData = await token.json();
      const status = token.status;
      const authToken = tokenData.token;
      if (status === 200) {
        if (saveToStorage({ authToken })) {
          notify("success", "success");
          navigate("/doctor/profile");
        } else {
          notify("some problems occurred", "error");
        }
      } else {
        const error = tokenData.status;
        error && notify(error, "error");
      }
    });
  };

  return (
    <LoginContext.Provider value={{ data, setData, login }}>
      {children}
    </LoginContext.Provider>
  );
};
