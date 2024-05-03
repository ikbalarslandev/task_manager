"use client";

import { useState } from "react";
import Modal from "@/components/dashboard/modal";

interface SingleTaskProps {
  task: any;
}

const SingleTask = ({ task }: SingleTaskProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  const handleOpenClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="border bg-blue-100/10 shadow-sm mx-[1px] rounded-sm px-2 py-1">
      <div onClick={handleOpenClick}> {task.name}</div>
      {isOpen && <Modal handleClose={handleCloseClick} />}
    </div>
  );
};

export default SingleTask;
