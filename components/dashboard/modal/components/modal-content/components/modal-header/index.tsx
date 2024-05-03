import { Button } from "@/components/ui/button";

// icons
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { RiHome3Line } from "react-icons/ri";
import { FaArrowsAlt } from "react-icons/fa";

import { BsThreeDots } from "react-icons/bs";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

const ModalHeader = ({ handleClose }: any) => {
  return (
    <div className="flex items-center justify-between px-6 py-3">
      <div className="flex text-gray-500 gap-5">
        <div className="flex gap-3 items-center">
          <FaChevronUp />
          <FaChevronDown />
        </div>
        <div className="flex gap-5 items-center">
          <RiHome3Line size={24} />
          <div className="flex items-center gap-2">
            <FaChevronRight size={12} />
            <p>25 Proje</p>
            <FaChevronRight size={12} />
            <p>Projects</p>
            <FaChevronRight size={12} />
            <p className="text-blue-500 font-bold">Frontend Case</p>
          </div>

          <FaArrowsAlt size={20} />
        </div>
      </div>

      <div className="flex text-gray-400  items-center justify-center">
        <BsThreeDots size={20} />
        <FaArrowUpRightFromSquare size={18} className="mx-5" />
        <FaRegStar size={22} className="mr-3" />
        <IoIosClose size={36} onClick={handleClose} />
      </div>
    </div>
  );
};

export default ModalHeader;
