"use client";

import { useCookie } from "@/hooks/useCookie";
import { login } from "@/services/auth";
import LoginForm from "@/components/auth/login-form";

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black ">
      {/* <button onClick={handleClick}>hello</button> */}

      <LoginForm />
    </main>
  );
}
