// CommonTable.jsx
import React from "react";
import Action from "./Action";

const Table = ({ columns, data }: { columns: any[]; data: any[] }) => {
  return (
    <table className="w-full border border-gray-200 rounded-lg">
      <thead className="mb-2 border-b bg-gray-25">
        <tr className="text-gray-950 text-sm">
          {columns.map((col, index) => (
            <th className="text-start px-8 py-4" key={index}>
              {col}
            </th>
          ))}
          <th className="flex text-start px-8 py-4">Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={
              rowIndex % 2 === 0 ? "bg-gray-25 h-10" : "bg-gray-100 h-10"
            }
          >
            {columns.map((col, colIndex) => (
              <td className="px-8 py-4" key={colIndex}>
                {row[col]}
              </td>
            ))}
            <td className="px-8 py-4">
              <Action />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
