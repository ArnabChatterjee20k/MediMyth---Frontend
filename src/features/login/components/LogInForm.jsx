import Input from "./Input";
import Stack from "@mui/material/Stack";
import { PrimaryButton } from "../../../components/ui/Buttons";
import { Email } from "../../../data/validErrorPatterns";
import { useLoginContext } from "../context/LoginContextProvider";
export default function LogInForm() {
  const {login,isFetching} = useLoginContext()

  return (
    <Stack
      mt={8}
      alignItems="center"
      gap={4}
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        login()
      }}
    >
      <Input
        name={"email"}
        type="email"
        errorPattern={Email}
        errorText="Enter valid email"
        placeholder="Enter your registered email"
        label="Email"
      />
      <Input
        name={"password"}
        type="password"
        placeholder="Enter your password"
        label="Password"
      />
      <PrimaryButton type="submit" disabled={isFetching}>Submit</PrimaryButton>
    </Stack>
  );
}
