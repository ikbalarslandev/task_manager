"use client";

import { useCookie } from "@/hooks/useCookie";
import { login } from "@/services/auth";

export default function Home() {
  const { setCookie } = useCookie();

  const handleClick = () => {
    login({
      email: "tesst@example.com",
      password: "password",
    }).then((res: any) => {
      setCookie("userToken", res.data.data.token);
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <button onClick={handleClick}>hello</button>
    </main>
  );
}
