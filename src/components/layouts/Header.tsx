"use client";
import Link from "next/link";
import ProfileImg from "@/components/ui/ProfileImg";
import Cookies from "universal-cookie";
import { useState, Suspense } from "react";
import {
  LogOut,
  LucideGrid2X2,
  LucideShoppingBag,
  Search,
  UserCircle2,
} from "lucide-react";
import { useRouter } from "next/navigation";

const cookies = new Cookies({ path: "/" });

const data = [
  {
    ttl: "profile",
    link: "/profile",
    icon: <UserCircle2 className="text-slate-800" />,
  },
  {
    ttl: "products",
    link: "/products",
    icon: <LucideGrid2X2 className="text-slate-800" />,
  },
  {
    ttl: "cart",
    link: "/cart",
    icon: <LucideShoppingBag className="text-slate-800" />,
  },
];

const Header = ({}) => {
  const router = useRouter();
  const user = cookies.get("user");

  const [open, setopen] = useState<boolean>(false);

  const handleLogout = () => {
    cookies.remove("user");
    router.refresh();
  };

  return (
    <div className="bg-slate-100 h-[60px] py-3 px-5 flex items-center justify-between shadow-lg">
      <Link href={"/"} className="font-bold text-xl">
        Logo
      </Link>
      <div className="flex items-center h-full">
        <nav className="sm:flex list-none gap-3 hidden">
          <li>Home</li>
          <li>products</li>
          <li>Contact</li>
        </nav>
        <p className="h-full sm:block hidden w-[2px] bg-slate-400 mx-3" />
        <div className="relative flex items-center gap-3">
          <Search />
          <ProfileImg
            onClick={() => setopen(!open)}
            img={user?.image}
            text={user?.first_name}
            link={user?.id ? null : "/login"}
          />
          {open && user?.id ? (
            <div className="absolute text-sm top-12 right-0 bg-white shadow-md rounded-md w-[250px] border-slate-400 border">
              <div className="p-2 ">
                <h2 className="text-slate-900 text-lg bg-slate-100 p-2 rounded-md font-semibold">
                  {user?.first_name}
                </h2>
              </div>
              <span className=" bg-slate-400 block h-[1px]"></span>
              <ul className="flex flex-col p-2">
                {data?.map((e, i) => (
                  <li key={i}>
                    <Link
                      href={e?.link}
                      className="flex items-center gap-2 font-semibold hover:bg-slate-100 rounded p-2"
                    >
                      {e?.icon}
                      <span>{e?.ttl}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <span className=" bg-slate-400 block h-[1px]"></span>
              <div className="p-2 cursor-pointer" onClick={handleLogout}>
                <h2 className="text-slate-900 flex items-center gap-2 bg-red-100 p-2 rounded-md font-semibold">
                  <LogOut />
                  Log out
                </h2>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
