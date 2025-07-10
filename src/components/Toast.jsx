import React, { useEffect } from "react";

const Toast = ({ message, show, type = "success", onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 2000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className={`toast toast-${type}`}>{message}</div>
  );
};

export default Toast; 