import { ReactNode, useState } from "react";

interface AlertProps {
  children: ReactNode;
  onClose: () => void;
}
export const Alert = (props: AlertProps) => {
  return (
    <div className="alert alert-warning alert-dismissible fade show">
      {props.children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={props.onClose}
      ></button>
    </div>
  );
};
