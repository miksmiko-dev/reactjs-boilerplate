import { navigation } from "@/constants/navigation/admin/admin-nav";
import AdminPage from "@/pages/authenticated/admin/page";
import Authguards from "../../components/molecules/guards/guards.tsx";
import type { RouteObject } from "react-router-dom";

const AdminRoutes: RouteObject = {
  path: "/admin",
  element: (
    <Authguards allowedRoles="admin">
      <AdminPage />
    </Authguards>
  ),
  children: navigation.map((route) => ({
    path: route.path,
    element: route.component,
  })),
};
export default AdminRoutes;
