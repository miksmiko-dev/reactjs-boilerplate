import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import type { NavigationTypes } from "@/constants/navigation/types/types";
import { Link } from "react-router-dom";

interface AppSiderProps {
  filterNavigation: NavigationTypes[];
}

const AppSider = ({ filterNavigation }: AppSiderProps) => {
  return (
    <Sidebar className="border-r flex-shrink-0">
      {/* Sidebar Header */}
      <SidebarHeader className="border-b px-6 py-4 bg-background">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold text-lg hover:opacity-80 transition-opacity"
        >
          {/* <Home className="h-6 w-6" /> */}
          <span>CMS San Isidro</span>
        </Link>
      </SidebarHeader>

      {/* Sidebar Navigation - Scrollable */}
      <SidebarContent className="px-3 py-4 overflow-y-auto">
        <SidebarMenu>
          {filterNavigation.map((item: NavigationTypes) =>
            item.isShow ? (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton
                  asChild
                  className="justify-start px-4 py-2.5 hover:bg-accent hover:text-accent-foreground transition-colors duration-200 rounded-md"
                >
                  <Link
                    to={item.path}
                    className="flex items-center gap-3 w-full"
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ) : null,
          )}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSider;
