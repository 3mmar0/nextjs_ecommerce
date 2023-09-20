import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";
import { Button } from "./Button";
import { Icons } from "../icons";
import Input from "./Input";
import Label from "./Label";

interface FormProps extends HTMLAttributes<HTMLFormElement> {}

const Form: FC<FormProps> = ({ className, ...props }) => {
  return (
    <form
      className={cn(
        "flex gap-4 p-4 border-n max-w-[600px] w-full min-w-[300px]",
        className
      )}
      method="post"
    >
      <h2 className="font-semibold text-2xl">Welcome back</h2>
      <p className="-mt-4 text-slate-600 font-medium">
        Enter your email below to open the website
      </p>
      <div>
        <div>
          <Button size={"lg"} text="Google" className="w-full ">
            <Icons.google className="mr-2 h-5 w-5 text-red-900" />
          </Button>
        </div>
        <div className="relative flex justify-center items-center bg-border h-[1px] w-full my-5">
          {/* <span className="bg-slate-800 "></span> */}
          <span className="absolute font-bold bg-white py-1 px-2 mb-px">
            Or continue with
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <Label htmlFor="password">password</Label>
            <Input
              name="password"
              type="password"
              id="password"
              placeholder="Enter your email"
            />
          </div>
          <Button
            type="submit"
            className="mt-3"
            variant={"outline"}
            text="Sign In"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
