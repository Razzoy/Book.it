import { FormCard } from "../components/FormCard/FormCard";
import { FormInput } from "../components/FormCard/FormInput/FormInput";

export function SignIn(Login = () => { }) {
  return (
    <FormCard pageTitle={`Sign in`} action={Login} bTitle={"Sign in"}>
      <h2>Welcome</h2>
      <h3>To use this app, please sign in</h3>
      <FormInput type={"email"} id={"email"} label={"Username/email"} src={"user.png"} />
      <FormInput type={"password"} id={"password"} label={"Password"} src={"lock.png"} />
    </FormCard>
  )
}
