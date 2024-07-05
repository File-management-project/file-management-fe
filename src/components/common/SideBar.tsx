// src/components/common/Sidebar.js
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";

const menuData = [
  {
    title: "Dashboard",
    submenu: [
      { title: "Overview", path: "/overview" },
      { title: "Stats", path: "/stats" },
    ],
  },
  {
    title: "Quản lý danh mục",
    submenu: [
      { title: "Đơn vị / Phòng ban", path: "/profile" },
      { title: "Chức vụ", path: "/account" },
      { title: "Cấp địa bàn", path: "/account" },
      { title: "Giới tính", path: "/account" },
      { title: "Loại bản", path: "/account" },
      { title: "Vật mang tin", path: "/account" },
      { title: "Ngôn ngữ", path: "/account" },
      { title: "Giá trị đặc biệ", path: "/account" },
      { title: "Loại băng đĩa", path: "/account" },
      { title: "Loại ghi âm", path: "/account" },
    ],
  },
  {
    title: "Quản lý danh mục",
    submenu: [
      { title: "Đơn vị / Phòng ban", path: "/profile" },
      { title: "Chức vụ", path: "/account" },
      { title: "Cấp địa bàn", path: "/account" },
      { title: "Giới tính", path: "/account" },
      { title: "Loại bản", path: "/account" },
      { title: "Vật mang tin", path: "/account" },
      { title: "Ngôn ngữ", path: "/account" },
      { title: "Giá trị đặc biệ", path: "/account" },
      { title: "Loại băng đĩa", path: "/account" },
      { title: "Loại ghi âm", path: "/account" },
    ],
  },
  {
    title: "Quản lý danh mục",
    submenu: [
      { title: "Đơn vị / Phòng ban", path: "/profile" },
      { title: "Chức vụ", path: "/account" },
      { title: "Cấp địa bàn", path: "/account" },
      { title: "Giới tính", path: "/account" },
      { title: "Loại bản", path: "/account" },
      { title: "Vật mang tin", path: "/account" },
      { title: "Ngôn ngữ", path: "/account" },
      { title: "Giá trị đặc biệ", path: "/account" },
      { title: "Loại băng đĩa", path: "/account" },
      { title: "Loại ghi âm", path: "/account" },
    ],
  },
  {
    title: "Quản lý danh mục",
    submenu: [
      { title: "Đơn vị / Phòng ban", path: "/profile" },
      { title: "Chức vụ", path: "/account" },
      { title: "Cấp địa bàn", path: "/account" },
      { title: "Giới tính", path: "/account" },
      { title: "Loại bản", path: "/account" },
      { title: "Vật mang tin", path: "/account" },
      { title: "Ngôn ngữ", path: "/account" },
      { title: "Giá trị đặc biệ", path: "/account" },
      { title: "Loại băng đĩa", path: "/account" },
      { title: "Loại ghi âm", path: "/account" },
    ],
  },
  { title: "Help", path: "/help" },
];

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuClick = (index: any) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <div className="sidebar p-4 border border-gray-200 w-[240px]">
      <ul>
        {menuData.map((menu, index) => (
          <li key={index} className="mt-4">
            {menu.submenu ? (
              <>
                <div className="flex items-center gap-1">
                  <Image
                    src={"/images/archive.svg"}
                    alt={""}
                    width={20}
                    height={20}
                  ></Image>
                  <button onClick={() => handleMenuClick(index)}>
                    {menu.title}
                  </button>
                  {openMenu === index ? (
                    <ChevronUp width={20} />
                  ) : (
                    <ChevronDown width={20} />
                  )}
                </div>
                {openMenu === index && (
                  <ul className="list-image-[url(/images/device.png)]">
                    {menu.submenu.map((submenu, subIndex) => (
                      <li key={subIndex} className="">
                        <a href={submenu.path}>{submenu.title}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <a href={menu.path}>{menu.title}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
