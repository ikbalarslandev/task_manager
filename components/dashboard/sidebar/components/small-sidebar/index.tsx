import { FiBell } from "react-icons/fi";
import Image from "next/image";

const Icon = () => {
  return (
    <FiBell className="text-gray-500 w-8 h-8 p-2  hover:bg-gray-500/50 rounded-md" />
  );
};

const SmallSidebar = () => {
  return (
    <section className="bg-side px-2 flex flex-col items-center justify-between">
      <div className="mt-4 flex flex-col gap-1">
        <Icon />
        <Icon />
        <Icon />
        <Icon />
      </div>
      <div className="mb-4 flex flex-col gap-1 items-center ">
        <Icon />
        <Icon />
        <Icon />
        <Icon />
        <Image
          src="/placeholder.png"
          alt="avatar"
          width={30}
          height={30}
          className="rounded-full bg-gray-500 mt-3"
        />
      </div>
    </section>
  );
};

export default SmallSidebar;
