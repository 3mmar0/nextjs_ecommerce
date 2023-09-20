import Link from "next/link";
import { FC } from "react";
import ProfileImg from "@/components/ui/ProfileImg";

const Header: FC = ({}) => {
  return (
    <div className="bg-slate-100 h-[60px] py-3 px-5 flex items-center justify-between shadow-lg">
      <Link href={"/"} className="font-bold text-xl">
        Logo
      </Link>
      <div className="flex items-center h-full">
        <nav className="flex list-none gap-3">
          <li>Home</li>
          <li>products</li>
          <li>Contact</li>
        </nav>
        <p className="h-full block w-[2px] bg-slate-400 mx-3" />
        <ProfileImg img="" />
      </div>
    </div>
  );
};

export default Header;
