"use client";
import { Button } from "@/components/common/Button";
import LayoutWeb from "@/components/common/LayoutWeb";
import Pagination from "@/components/common/Pagination";
import Table from "@/components/common/Table";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import positionData from "@/data/positionData.json";
import AddPanel from "@/components/common/AddPanel";
import Filter from "@/components/common/Filter";
import formFields from "@/data/positionForm.json";

export default function Department() {
  const columns = positionData.columns;
  const data = positionData.data;

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const [showPanel, setShowPanel] = useState(false);

  const breadCrumbs = [
    { title: "Homepage", url: "/" },
    { title: "CategoryManagement", url: "/" },
    { title: "Position", url: "/" },
  ];

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

  const handleClosePanel = () => {
    setShowPanel(false);
  };

  const handleFilterChange = (event: any) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <LayoutWeb breadCrumbs={breadCrumbs}>
        <div className="p-4 h-full bg-gray-50">
          <h1 className="text-displaySm text-gray-950">Chức vụ</h1>
          <div className="flex justify-between mb-8 mt-8">
            <Filter
              placeholder="Tìm tên theo từ khoá"
              onChange={handleFilterChange}
            />
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
      <AddPanel
        isOpen={showPanel}
        onClose={handleClosePanel}
        formFields={formFields}
      />
    </div>
  );
}
