"use client";
import React, { PropsWithChildren } from "react";
import Image from "next/image";
import Profile from "./Profile";
import { ArrowLeft, ChevronDown } from "lucide-react";
import SnackBar from "./SnackBar";
import Step from "./Step";
import SideBar from "./SideBar";
import Breadcrumb from "./Breadcrumb";

type Props = {
  breadCrumbs?: any[];
};

export default function LayoutWeb({
  children,
  breadCrumbs,
}: PropsWithChildren<Props>) {
  const crumbs = [
    { title: "Homepage", url: "/" },
    { title: "CategoryManagement", url: "/category-management" },
  ];

  console.log("breadCrumbs", breadCrumbs);
  return (
    <section className="w-full min-h-screen h-max relative bg-white text-gray-950">
      <header className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
        <div className="flex gap-2">
          <Image
            src={"/images/logo.png"}
            alt={"logo"}
            width={32}
            height={32}
          ></Image>
          <h3 className="text-md text-[#084C2E]">Quản lý tài liệu TP Hà Nội</h3>
        </div>
        {/* <Profile></Profile> */}
        <div className="flex items-center gap-1">
          <Image
            src={"/images/avatar.png"}
            alt={"logo"}
            width={32}
            height={32}
          ></Image>
          <ChevronDown width={20} height={20}></ChevronDown>
        </div>
      </header>
      <div className="flex justify-between items-center border border-gray-200">
        <div className="w-[240px] border-r border-gray-200">
          <div className="flex items-center w-[240px] justify-between h-10 px-4">
            <h2>Menu</h2>
            <ArrowLeft width={20} hanging={20}></ArrowLeft>
          </div>
        </div>
        <div className="w-full pl-4">
          <Breadcrumb crumbs={breadCrumbs ? breadCrumbs : crumbs}></Breadcrumb>
        </div>
      </div>
      <div className="flex h-full">
        <SideBar></SideBar>
        <div className="grow">{children}</div>
      </div>
    </section>
  );
}
