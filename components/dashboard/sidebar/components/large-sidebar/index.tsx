"use client";

import { profile } from "@/services/auth";
import { useCookie } from "@/hooks/useCookie";
import { useEffect, useState } from "react";
import { AccordionComponent } from "./components/accordion";

const LargeSeidebar = () => {
  const { getCookie } = useCookie();
  const token = getCookie("userToken");
  const [user, setUser] = useState({
    email: "",
    fullName: "",
  });

  useEffect(() => {
    profile(token!).then((res) => {
      setUser({
        email: res.data.data.email,
        fullName: res.data.data.fullName,
      });
    });
  }, []);

  return (
    <section className=" px-2 flex">
      <div className="  flex flex-col my-2">
        <h5 className="">Projeler</h5>

        <AccordionComponent />
        <div className=" mt-auto flex  items-start justify-between mr-2">
          <div>
            <h6 className="font-bold">{user.fullName}</h6>
            <p>{user.email}</p>
          </div>
          <input className="w-4 h-4" type="radio" />
        </div>
      </div>
    </section>
  );
};

export default LargeSeidebar;
