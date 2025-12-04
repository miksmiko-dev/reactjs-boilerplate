import { navigation } from "@/constants/navigation/navigation";
import { superAdminNav } from "@/constants/navigation/superadmin/superadmin-nav";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/header";
import AppSider from "./components/sidebar/app-sider";
import { ThemeProvider } from "@/components/theme/theme-provider";

const MainLayout: React.FC<{ role: string }> = ({ role }) => {
  // Filter navigation based on role
  const filterNavigation =
    role === "admin" ? navigation : role === "superadmin" ? superAdminNav : [];

  useEffect(() => {}, []);

  return (
    <ThemeProvider>
      <SidebarProvider>
        <div className="flex h-screen w-full">
          <AppSider filterNavigation={filterNavigation} />
          <div className="flex flex-1 flex-col h-full w-full">
            <Header />
            <main className="flex-1 w-full overflow-auto space-y-4 p-8 pt-6 ">
              <Outlet />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default MainLayout;
