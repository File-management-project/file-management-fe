import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`px-3 py-1 mx-1 ${currentPage === i ? "font-bold" : ""}`}
          >
            {i}
          </button>
        );
      }
    } else {
      pageNumbers.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className={`px-3 py-1 mx-1 ${currentPage === 1 ? "font-bold" : ""}`}
        >
          1
        </button>
      );
      pageNumbers.push(
        <button
          key={2}
          onClick={() => onPageChange(2)}
          className={`px-3 py-1 mx-1 ${currentPage === 2 ? "font-bold" : ""}`}
        >
          2
        </button>
      );

      if (currentPage > 4) {
        pageNumbers.push(
          <span key="dots1" className="px-3 py-1 mx-1">
            ...
          </span>
        );
      }

      if (currentPage > 3 && currentPage < totalPages - 2) {
        pageNumbers.push(
          <button
            key={currentPage}
            onClick={() => onPageChange(currentPage)}
            className="px-3 py-1 mx-1 font-bold"
          >
            {currentPage}
          </button>
        );
      }

      if (currentPage < totalPages - 3) {
        pageNumbers.push(
          <span key="dots2" className="px-3 py-1 mx-1">
            ...
          </span>
        );
      }

      pageNumbers.push(
        <button
          key={totalPages - 1}
          onClick={() => onPageChange(totalPages - 1)}
          className={`px-3 py-1 mx-1 ${
            currentPage === totalPages - 1 ? "font-bold" : ""
          }`}
        >
          {totalPages - 1}
        </button>
      );
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={`px-3 py-1 mx-1 ${
            currentPage === totalPages ? "font-bold" : ""
          }`}
        >
          {totalPages}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex justify-center mt-4 border border-[#E3E8EF] rounded-lg w-fit">
      <button
        onClick={handlePrevious}
        className="px-3 py-1 mx-1"
        disabled={currentPage === 1}
      >
        <ArrowLeft />
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        className="px-3 py-1 mx-1"
        disabled={currentPage === totalPages}
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
