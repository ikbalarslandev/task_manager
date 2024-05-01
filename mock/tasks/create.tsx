"use client";

import { create } from "@/services/tasks";
import { useCookie } from "@/hooks/useCookie";

export default function Home() {
  const { getCookie } = useCookie();

  const handleClick = () => {
    create(getCookie("userToken")!, {
      name: "string",
      description: "string",
      boardId: 1,
      flagId: 1,
      startDate: "2024-02-15T10:00:00",
      endDate: "2024-02-20T10:00:00",
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <button onClick={handleClick}>hello</button>
    </main>
  );
}
