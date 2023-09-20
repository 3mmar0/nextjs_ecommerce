import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Profile from "@/assets/profile.png";

interface ProfileImgProps {
  img: string;
  link?: string;
}

const ProfileImg: FC<ProfileImgProps> = ({ img, link = "/login" }) => {
  return (
    <div className="rounded-full w-[40px] h-[40px] bg-slate-200 shadow hover:scale-105 active:scale-95">
      <Link href={link}>
        <Image src={Profile} width={40} height={40} alt="" />
      </Link>
    </div>
  );
};

export default ProfileImg;
