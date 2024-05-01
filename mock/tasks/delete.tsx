"use client";

import { deleteTask } from "@/services/tasks";
import { useCookie } from "@/hooks/useCookie";

export default function Home() {
  const { getCookie } = useCookie();

  const handleClick = () => {
    deleteTask(getCookie("userToken")!, 70)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <button onClick={handleClick}>hello</button>
    </main>
  );
}
