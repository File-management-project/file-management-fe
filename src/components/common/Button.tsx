"use client";
import classNames from "classnames";
import Image from "next/image";
import React, { PropsWithChildren, ReactNode } from "react";

const styles = {
  "b-wide": "min-w-[200px]",
  "b-small": "text-sm font-medium px-4 !py-1",
  "b-medium": "text-base font-medium px-10 !py-3",
  "b-large": "text-lg font-medium px-14 !py-3",
};

const BASE_CLASS =
  "flex items-center justify-center rounded-lg px-4 py-3 text-center font-semibold";

type Props = {
  className?: string;
  disabled?: boolean;
  outlined?: boolean;
  loading?: boolean;
  size?: "small" | "medium" | "large";
  urlIcon?: string;
  iconElement?: ReactNode;
  onClick?: () => void;
  wide?: boolean;
  highlight?: boolean;
  id?: string;
  [key: string]: unknown;
};

export const Button = ({
  disabled,
  size,
  className,
  outlined,
  highlight,
  urlIcon,
  loading,
  wide,
  children,
  onClick,
  iconElement,
  id,
  ...rest
}: PropsWithChildren<Props>) => {
  const sizes = ["small", "medium", "large"];
  const classes = classNames([
    BASE_CLASS,
    size && sizes.includes(size) ? styles[`b-${size}`] : styles["b-medium"],
    loading || disabled ? "cursor-default opacity-10" : "",
    outlined
      ? "bg-gray-5 text-gray-0 border border-gray-200 shadow-[0_6px_1px_-3px_#CDD5DF]"
      : "bg-blue-400 text-gray-0",
    highlight && "bg-gray-5 !text-gray-0 border !border-gray-1000",
    wide && "w-full",
    className,
  ]);

  const handleOnClick = () => {
    onClick && onClick();
  };
  return (
    <button
      id={id}
      onClick={handleOnClick}
      type="button"
      disabled={disabled || loading}
      className={classes}
      {...rest}
    >
      {loading ? (
        <span
          className={classNames(
            "inline-block h-6 w-6 animate-spin rounded-full border-[3px] border-current border-t-transparent",
            outlined ? "text-gray-1000/60" : "text-gray-5/60"
          )}
          role="status"
          aria-label="loading"
        />
      ) : (
        <div className="flex items-center justify-center">
          {urlIcon && (
            <Image
              className="mr-2"
              src={urlIcon}
              width={16}
              height={16}
              alt="button icon"
            />
          )}
          {children}
          {iconElement && iconElement}
        </div>
      )}
    </button>
  );
};
