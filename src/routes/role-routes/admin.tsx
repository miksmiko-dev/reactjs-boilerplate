import { navigation } from "@/constants/navigation/admin/admin-nav";
import AdminPage from "@/pages/authenticated/admin/page";
import Authguards from "../../components/molecules/guards/guards.tsx";
import type { RouteObject } from "react-router-dom";
import { Suspense } from "react";
import Loading from "@/components/organism/loading/loading.tsx";
import type { NavigationTypes } from "@/constants/navigation/types/types.ts";

const AdminRoutes: RouteObject = {
  path: "/admin",
  element: (
    <Authguards allowedRoles="admin">
      <AdminPage />
    </Authguards>
  ),
  children: navigation.map((route: NavigationTypes) => ({
    path: route.path,
    element: <Suspense fallback={<Loading />}>{route.component}</Suspense>,
  })),
};
export default AdminRoutes;
