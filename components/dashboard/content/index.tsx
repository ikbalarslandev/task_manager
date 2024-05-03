"use client";

import { boards } from "@/services/boards";
import { useCookie } from "@/hooks/useCookie";
import { useEffect, useState } from "react";

import BoardItem from "./components/board-item";

const DashboardContentComponent = () => {
  const { getCookie } = useCookie();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    boards(getCookie("userToken")!)
      .then((res) => {
        console.log(res.data.data);
        return setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className=" flex-1 flex gap-2 ">
      {data.map((item: any) => (
        <BoardItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default DashboardContentComponent;
