"use client";

import { useCookie } from "@/hooks/useCookie";
import { useRouter } from "next/navigation";

interface LogoutButtonProps {
  children?: React.ReactNode;
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const router = useRouter();
  const { removeCookie } = useCookie();

  const onClick = () => {
    removeCookie("userToken");
    router.push("/");
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
