import { SignUp } from "@clerk/clerk-react";
import"./SignUp.css"

const SignUpPage = () => {
  return (
    <div className="signUpPage">
      <SignUp path="/sign-up" signInUrl="sign-in" />
    </div>
  );
};

export default SignUpPage;
