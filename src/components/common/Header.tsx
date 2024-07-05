import Image from "next/image";
import React from "react";
import Profile from "./Profile";

export default function Header() {
  return (
    <div className="w-full h-[53px] p-3 bg-lightBlue-900 flex justify-center items-center">
      <div className="w-full flex gap-x-7 px-8 items-center h-max">
        <Image
          src="/images/project-icon.png"
          alt="app logo"
          width={36}
          height={24}
        />
        <div className="flex flex-grow gap-x-5 items-center text-gray-5 font-normal">
          <div className="text-md">Report</div>
          <div className="text-md">Vehicle</div>
          <div className="text-md">Vehicle</div>
        </div>
        <Profile />
      </div>
    </div>
  );
}
