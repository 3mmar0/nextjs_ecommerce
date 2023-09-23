"use client";
import Image from "next/image";
import Link from "next/link";
import { FC, HTMLAttributes } from "react";
import Profile from "@/assets/profile.png";

interface ProfileImgProps extends HTMLAttributes<HTMLDivElement> {
  img: string | null;
  link?: string | null;
  text?: string;
}

const ProfileImg: FC<ProfileImgProps> = ({
  img,
  text,
  link = "/login",
  ...props
}) => {
  return (
    <div
      {...props}
      className="rounded-full cursor-pointer flex justify-center items-center w-[40px] h-[40px] bg-slate-300 shadow shadow-slate-500 hover:scale-105 active:scale-95"
    >
      {link ? (
        <Link href={link}>
          <Image
            src={img ? img : Profile}
            width={40}
            height={40}
            alt=""
            className="mb-[5px]"
          />
        </Link>
      ) : (
        <>
          <p className="font-semibold capitalize ">{text?.slice(0, 2)}</p>
        </>
      )}
    </div>
  );
};

export default ProfileImg;
