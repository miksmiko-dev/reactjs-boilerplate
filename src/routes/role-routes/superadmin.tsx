import Authguards from "@/components/molecules/guards/guards";
import { superAdminNav } from "@/constants/navigation/superadmin/superadmin-nav";
import SuperAdminPage from "@/pages/authenticated/superadmin/page";
import type { RouteObject } from "react-router-dom";

const SuperAdminRoutes: RouteObject = {
  path: "/superadmin",
  element: (
    <Authguards allowedRoles="">
      <SuperAdminPage />
    </Authguards>
  ),
  children: superAdminNav.map((route) => ({
    path: route.path,
    element: route.component,
  })),
};
export default SuperAdminRoutes;
