import { Eye, SquarePen, Trash2 } from "lucide-react";
import React from "react";

export default function Action() {
  return (
    <div className="flex items-center gap-2">
      <Eye color="#667085" width={16} height={16} />
      <SquarePen color="#667085" width={16} height={16} />
      <Trash2 color="#667085" width={16} height={16} />
    </div>
  );
}
