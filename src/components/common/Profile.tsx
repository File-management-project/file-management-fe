import React from "react";
import Image from "next/image";
export default function Profile() {
  return (
    <div className="rounded-full h-max w-max">
      <Image
        src="/images/profile-default.png"
        alt="app logo"
        width={36}
        height={36}
      />
    </div>
  );
}
