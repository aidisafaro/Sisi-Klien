import LoginForm from "../fragments/FormSignUp";
import AuthLayout from "../layout/AuthLayout";

const SignIn = () => {
  return (
    <AuthLayout type="sign in">
      <LoginForm />
    </AuthLayout>
  );
};

export default SignIn;