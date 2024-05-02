"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useCookie } from "@/hooks/useCookie";
import { useState, useEffect } from "react";
import { profile } from "@/services/auth";

export default function HomeComponent() {
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { getCookie } = useCookie();

  const cookie = getCookie("userToken");

  useEffect(() => {
    if (cookie) {
      profile(cookie)
        .then((res) => {
          setFullName(res.data.data.fullName);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [cookie]);

  const handleLogin = () => {
    router.push("/login");
  };

  const handleRegister = () => {
    router.push("/register");
  };

  const handleDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24 bg-black text-white">
      <h1 className="text-3xl">Welcome To Task Manager</h1>

      {loading ? (
        <p>Loading...</p>
      ) : fullName ? (
        <div className="flex flex-col items-center gap-10">
          <p>{fullName}</p>
          <Button onClick={handleDashboard} variant="secondary">
            Dashboard
          </Button>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-10">
          <Button onClick={handleLogin} variant="secondary">
            Login
          </Button>
          <Button onClick={handleRegister} variant="secondary">
            Register
          </Button>
        </div>
      )}
    </main>
  );
}
