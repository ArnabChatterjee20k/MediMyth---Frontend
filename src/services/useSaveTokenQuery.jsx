import { useSignIn } from "react-auth-kit";

export const useSaveTokenQuery = () => {
  // saving to the local storage
  const signIn = useSignIn();
  function saveToStorage({ authToken }) {
    return signIn({ token: authToken, expiresIn: 120, tokenType: "Bearer" });
  }
  return saveToStorage;
};
