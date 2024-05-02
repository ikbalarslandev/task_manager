import { LogoutButton } from "@/components/auth/logout-button";
import { FiBell } from "react-icons/fi";
import Image from "next/image";

const HeaderComponent = () => (
  <header className=" border-b-2  flex justify-between items-center px-3 py-2">
    <h1 className="font-bold text-karga ml-1">kargakarga</h1>

    <div className="flex gap-1 justify-center items-center">
      <div className="flex gap-3">
        <FiBell className="text-gray-500" />
        <FiBell className="text-gray-500" />
      </div>

      <LogoutButton>
        <Image
          src="/logo25.png"
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </LogoutButton>
    </div>
  </header>
);

export default HeaderComponent;
