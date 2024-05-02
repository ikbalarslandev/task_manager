import { useCookie } from "@/hooks/useCookie";

export default function Home() {
  const { removeCookie } = useCookie();

  const handleClick = () => {
    removeCookie("userToken");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <button onClick={handleClick}>hello</button>
    </main>
  );
}
