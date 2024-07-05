import classNames from "classnames";
import { AlertCircle, CheckCircle2, X } from "lucide-react";
import React, { useEffect } from "react";
import { SnackbarTypes, useSnackbarStore } from "../../store/SnackbarStore";

const BASE_CLASSES =
  "inset-x-0 mx-auto w-fit rounded-md p-4 hs-removing:translate-x-10 hs-removing:opacity-0 fixed z-50 transition-all duration-1000 ease-in-out";

const SnackBar: React.FC = () => {
  const [isShowing, message, title, type, isLastMessage, close] =
    useSnackbarStore((state) => [
      state.isShowing,
      state.message,
      state.title,
      state.type,
      state.isLastMessage,
      state.close,
    ]);
  useEffect(() => {
    const interval = setInterval(close, isLastMessage ? 15000 : 10000);
    return () => clearInterval(interval);
  }, [isLastMessage, close]);

  const SNACKBAR_ICON = (type: SnackbarTypes) => {
    switch (type) {
      case SnackbarTypes.error:
        return <AlertCircle size={20} />;
      case SnackbarTypes.success:
        return <CheckCircle2 size={20} />;
      default:
        return <CheckCircle2 size={20} />;
    }
  };

  const SNACKBAR_COLOR = (type: SnackbarTypes) => {
    switch (type) {
      case SnackbarTypes.error:
        return "bg-[#DE1134] text-sm text-gray-5";
      case SnackbarTypes.success:
        return "bg-[#289F61] text-sm text-gray-5";
      default:
        return "bg-[#289F60] text-sm text-gray-5";
    }
  };

  const ICON = SNACKBAR_ICON(type);
  const snackClass = SNACKBAR_COLOR(type);

  return (
    <div
      className={classNames(
        BASE_CLASSES,
        isShowing ? "top-5" : "-top-[400px]",
        snackClass
      )}
    >
      <div className="flex w-full">
        <div className="shrink-0">{ICON}</div>
        <div className="-mt-1 ml-3">
          <div className="text-base font-semibold">{title}</div>

          <div>{message}</div>
        </div>
        <div className="ml-3">
          <div className="-mt-1">
            <button
              type="button"
              onClick={close}
              className="inline-flex cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
              data-hs-remove-element="#dismiss-alert"
            >
              <X color="white" size={16} className="mt-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnackBar;
