"use client";
import classNames from "classnames";
import { Circle, CircleX, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import React, { ReactNode, useRef, useState } from "react";

type Props = {
  value?: string;
  type: string;
  customInputClassNames?: string;
  customClassNames?: string;
  error?: string;
  placeholder?: string;
  clearable?: boolean;
  hiddenValidate?: boolean;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  [key: string]: unknown;
};
const BASE_CLASS =
  "w-full rounded-lg border border-gray-200 bg-gray-25 p-3 outline-none min-h-[48px] flex items-center";
const BASE_INPUT_CLASS =
  "mr-2 w-full text-lg font-normal outline-none bg-gray-25";
export const Input = ({
  value,
  error,
  type = "text",
  onChange,
  placeholder,
  onBlur,
  customInputClassNames,
  customClassNames,
  clearable,
  hiddenValidate,
  ...rest
}: Props) => {
  const [showPassword, setshowPassword] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value;
    onChange && onChange(newVal);
  };
  const handleOnBlur = () => {
    onBlur && onBlur();
    if (inputRef.current) {
      inputRef.current.classList.add("border-gray-200");
      inputRef.current.classList.remove("!border-lightBlue-500");
      if (!error) {
        inputRef.current.classList.remove("!border-2");
      }
    }
  };
  const handleShowPassword = () => {
    setshowPassword((prev) => !prev);
  };
  const handleClearValue = () => {
    onChange && onChange("");
  };
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.classList.remove("border-gray-200");
      inputRef.current.classList.add("!border-2");
      inputRef.current.classList.add("!border-lightBlue-500");
    }
  };

  return (
    <>
      <div
        ref={inputRef}
        className={classNames(
          BASE_CLASS,
          error && "!border-[#DE1135] focus:!border-[#DE1135] text-sm border-2",
          // value &&
          // "border-lightBlue-500 border-2",
          // !error &&
          customClassNames
        )}
      >
        <div className="flex w-full items-center text-base font-bold">
          <input
            type={showPassword ? "text" : type}
            lang="en-US"
            className={classNames(BASE_INPUT_CLASS, customInputClassNames)}
            placeholder={placeholder || ""}
            value={value}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            onFocus={handleFocus}
            {...rest}
          />
          {value && !error && (
            <button
              type="button"
              className={classNames("mr-2", hiddenValidate && "hidden")}
            >
              <Image
                src="/icons/check-circle.svg"
                alt="warning"
                height={20}
                width={20}
              />
            </button>
          )}
          {value && clearable && (
            <button
              type="button"
              onClick={handleClearValue}
              className={classNames(type === "password" && "mr-2")}
            >
              <Image
                src="/icons/clear-circle.svg"
                alt="warning"
                height={20}
                width={20}
              />
            </button>
          )}
          {type === "password" && (
            <button type="button" onClick={handleShowPassword}>
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}
        </div>
      </div>
      {error && (
        <div className="flex items-center gap-x-1.5">
          {" "}
          <Image
            src="/icons/warning-circle.svg"
            alt="warning"
            height={20}
            width={20}
            className="mt-1.5"
          />
          <p className="mt-2 self-start text-sm text-[#DE1135]">{error}</p>{" "}
        </div>
      )}
    </>
  );
};
