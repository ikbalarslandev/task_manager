"use client";

import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const ModalWraper = ({ children }: any) => {
  const elRef = useRef<any>(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot?.appendChild(elRef.current);
    return () => modalRoot?.removeChild(elRef.current);
  }, []);

  return createPortal(
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-75 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-md mx-10 max-w-[1000px]">
        {children}
      </div>
    </div>,
    elRef.current
  );
};

export default ModalWraper;
