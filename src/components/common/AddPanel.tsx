import React, { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import { Plus } from "lucide-react";
// import formFields from "../../data/positionForm.json";

type Props = {
  isOpen: boolean;
  onClose?: () => void;
  formFields: any;
};

const AddPanel = ({ isOpen, onClose, formFields }: Props) => {
  const addPanelRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        addPanelRef.current &&
        !addPanelRef.current.contains(event.target as Node)
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div
      ref={addPanelRef}
      className={`panel ${isOpen ? "open w-[560px]" : "w-[560px]"}`}
    >
      <button className="close-button text-black" onClick={onClose}>
        &times;
      </button>
      <form onSubmit={handleSubmit}>
        <div className="text-displaySm text-gray-950 px-8 mt-8">
          {formFields.title}
        </div>
        <hr className="border border-gray-200 mt-8" />
        <div>
          {formFields.fields.map((field: any, index: any) => (
            <div
              key={index}
              className={`form-group flex flex-col mt-6 px-8 ${
                index === formFields.fields.length - 1 ? "h-[226px]" : ""
              }`}
            >
              <label
                className="text-sm text-gray-900 mb-2"
                htmlFor={field.name}
              >
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                id={field.name}
                onChange={handleInputChange}
                required
                className="border rounded border-gray-200 h-10 px-4 grow text-black"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center ml-8 mt-[180px]">
          <div
            className="text-gray-950 w-[70px] h-[40px] flex items-center justify-center border border-gray-300 rounded"
            onClick={onClose}
          >
            Thoát
          </div>
          <div className="w-[125px] mx-8" onClick={onClose}>
            <Button className="flex items-center gap-1">
              <Plus width={20} height={20} />
              <span className="text-sm text-gray-0">Thêm mới</span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPanel;
