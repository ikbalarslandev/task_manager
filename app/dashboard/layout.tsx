import HeaderComponent from "@/components/dashboard/header";
import SideBarComponent from "@/components/dashboard/sidebar";
import ContentCover from "@/components/dashboard/content/content-cover";

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
        <ContentCover>{children}</ContentCover>
      </div>
    </main>
  );
}
