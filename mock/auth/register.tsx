"use client";
import { register } from "@/services/auth";

export default function Home() {
  const handleClick = () => {
    register({
      fullName: "Full Name",
      email: "tessst@example.com",
      password: "password",
    }).then((res: any) => {
      console.log(res.data);
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <button onClick={handleClick}>hello</button>
    </main>
  );
}
