import { useSignIn } from "react-auth-kit";

export const useSaveTokenQuery = () => {
  // saving to the local storage
  const signIn = useSignIn();
  function saveToStorage({ authToken }) {
    return signIn({ token: authToken, expiresIn: 3600,authState:{token:authToken}, tokenType: "Bearer" });
  }
  return saveToStorage;
};
