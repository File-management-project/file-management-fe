"use client";
import React from "react";
import { Button } from "./Button";

export default function Dialog({ children }: { children: React.ReactNode }) {
  return (
    <dialog id="dialog" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          {children}
        </form>
      </div>
    </dialog>
  );
}
