// src/components/common/Panel.jsx
import React, { useEffect, useRef } from "react";

type Props = {
  isOpen: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
};

const Panel = ({ isOpen, onClose, children }: Props) => {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        onClose?.();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`panel ${isOpen ? "open" : ""}`}>
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      {children}
    </div>
  );
};

export default Panel;
