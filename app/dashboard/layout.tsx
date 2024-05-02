import HeaderComponent from "@/components/dashboard/header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-gray-700 min-h-screen">
      <HeaderComponent />
      {children}
    </main>
  );
}
