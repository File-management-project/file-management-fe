import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Profile() {
  return (
    <div className="flex items-center gap-1">
      <Image
        src={"images/avatar.png"}
        alt={"avatar"}
        width={32}
        height={32}
      ></Image>
      <ChevronDown></ChevronDown>
    </div>
  );
}
