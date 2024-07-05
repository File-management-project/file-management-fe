// src/components/common/Sidebar.js
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import menuData from "../../data/menuData.json";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const router = useRouter();

  const handleMenuClick = (index: any) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const handleSubmenuClick = (path: any) => {
    router.push("/category-management/" + path);
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
                  />
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
                      <li key={subIndex}>
                        <button
                          onClick={() => handleSubmenuClick(submenu.path)}
                        >
                          {submenu.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <button onClick={() => handleSubmenuClick(menu.path)}>
                {menu.title}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
