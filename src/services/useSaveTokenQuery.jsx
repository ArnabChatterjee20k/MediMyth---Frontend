import { useSignIn } from "react-auth-kit";

export const useSaveTokenQuery = () => {
  // saving to the local storage
  const signIn = useSignIn();
  function saveToStorage({ authToken }) {
    // in future role can be used to detect whether a doctor or a patient. 
    // If bychance any one changes doctor to patient then error will come in a doctor route or it will be not found
    // at that time just log them out and again do the login process
    return signIn({ token: authToken, expiresIn: 3600,authState:{token:authToken,role:"doctor"}, tokenType: "Bearer" });
  }
  return saveToStorage;
};
