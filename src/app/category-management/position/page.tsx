"use client";
import { Button } from "@/components/common/Button";
import LayoutWeb from "@/components/common/LayoutWeb";
import Pagination from "@/components/common/Pagination";
import SnackBar from "@/components/common/SnackBar";
import Table from "@/components/common/Table";
import { Plus } from "lucide-react";
import React, { useState, useEffect } from "react";
import departmentData from "@/data/departmentData.json";
import { useRouter } from "next/router";
import Panel from "@/components/common/Panel";

export default function Department() {
  const columns = departmentData.columns;
  const data = departmentData.data;

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 1;
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const [showPanel, setShowPanel] = useState(false);
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const currentData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleClick = () => {
    setShowPanel(true);
  };

  return (
    <div>
      <LayoutWeb>
        <div className="p-4 h-full">
          <h1 className="text-displaySm text-gray-950">Chức vụ</h1>
          <div className="flex justify-between mb-8 mt-8">
            <div className="h-fit">
              <label className="input input-bordered flex items-center gap-2 bg-gray-25 border border-gray-200 rounded px-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="text"
                  className="grow h-[44px]"
                  placeholder="Tìm tên theo từ khoá"
                />
              </label>
            </div>
            <div className="w-[125px]" onClick={handleClick}>
              <Button className="flex items-center gap-1">
                <Plus width={20} height={20} />
                <span className="text-sm text-gray-0">Thêm mới</span>
              </Button>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div className="grow">
              <Table columns={columns} data={currentData} />
            </div>
            <div className="flex justify-end">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </LayoutWeb>
      <Panel isOpen={showPanel} />
    </div>
  );
}
