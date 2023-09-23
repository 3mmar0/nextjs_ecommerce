import LoginForm from "@/components/form/LoginForm";
import { FC } from "react";

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  return (
    <div className="p-4 grid place-items-center h-[calc(100%-60px)]">
      <LoginForm className="flex-col" />
    </div>
  );
};

export default Login;
