import HeaderComponent from "@/components/dashboard/header";
import SideBarComponent from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=" min-h-screen flex flex-col">
      <HeaderComponent />
      <div className="flex flex-1">
        <SideBarComponent />
        <div className="bg-gray-500 flex-1"> {children}</div>
      </div>
    </main>
  );
}
