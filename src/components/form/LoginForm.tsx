"use client";
import FormModel from "@/models/form-model";
import { FC, useState, FormHTMLAttributes } from "react";
import FormInput from "./FormInput";
import { Button } from "../ui/Button";
import loginUSer from "@/app/fetches/auth/loginUser";
import Cookies from "universal-cookie";
import Loader from "../Loader";
import { useRouter } from "next/navigation";
const cookies = new Cookies({ path: "/" });

interface LoginFormProps extends FormHTMLAttributes<HTMLFormElement> {
  //   onSubmit: (email: string, password: string) => void;
}

type err = {
  email?: string;
  password?: string;
};

const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const router = useRouter();
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [erros, seterros] = useState<err>();
  const [loading, setloading] = useState<boolean>(false);

  const fetchData = async (email: string, password: string, e: any) => {
    e.preventDefault();
    setloading(true);
    const user = await loginUSer({ email, password });
    if (user.success) {
      cookies.set("user", user?.data);
      router.push("/");
    }
    setloading(false);

    seterros(user.errors);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <FormModel
      onSubmit={(e) => fetchData(email, password, e)}
      title="Sign In"
      disc="Continue to your store"
      className={className}
    >
      <FormInput
        label="email"
        name="email"
        type="email"
        placeholder="example@gmail.com"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        error={erros?.email}
        // required
      />
      <FormInput
        label="password"
        name="password"
        type="password"
        placeholder="*******"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        error={erros?.password}
        // required
      />

      <Button
        type="submit"
        className="mt-3"
        variant={"outline"}
        text="Sign In"
      />
    </FormModel>
  );
};

export default LoginForm;
