import HeaderComponent from "@/components/dashboard/header";
import SideBarComponent from "@/components/dashboard/sidebar";
import ContentWraper from "@/components/dashboard/content/content-wraper";

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
        <ContentWraper>{children}</ContentWraper>
      </div>
    </main>
  );
}
