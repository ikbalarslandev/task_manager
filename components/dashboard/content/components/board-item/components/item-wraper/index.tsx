import { FaPlus } from "react-icons/fa6";
import { PiDotsThreeCircleLight } from "react-icons/pi";

interface ItemWraperProps {
  children: React.ReactNode;
}

const ItemWraper = ({ children }: ItemWraperProps) => {
  return (
    <div className="bg-white shadow border border-gray-400 w-60 rounded-md">
      <div className="flex items-center justify-between px-2">
        <div className="flex py-4  gap-2 items-center ">
          <h3 className="text-karga">OPEN</h3>
          <p className="bg-blue-300/30 border border-blue-400 text-blue-600 rounded-full w-6 h-6 text-center">
            3
          </p>
        </div>
        <div className="flex items-center  gap-2 text-gray-400">
          <FaPlus />
          <PiDotsThreeCircleLight size={20} />
        </div>
      </div>
      <div className="bg-gray-400 h-[1px]"></div>
      {children}
    </div>
  );
};

export default ItemWraper;
