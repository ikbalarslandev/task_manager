"use client";
import { profile } from "@/services/auth";
import { useCookie } from "@/hooks/useCookie";

export default function Home() {
  const { getCookie } = useCookie();

  const handleClick = () => {
    profile(getCookie("userToken")!)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <button onClick={handleClick}>hello</button>
    </main>
  );
}
