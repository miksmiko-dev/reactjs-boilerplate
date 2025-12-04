import Authguards from "@/components/molecules/guards/guards";
import Loading from "@/components/organism/loading/loading";
import { superAdminNav } from "@/constants/navigation/superadmin/superadmin-nav";
import type { NavigationTypes } from "@/constants/navigation/types/types";
import SuperAdminPage from "@/pages/authenticated/superadmin/page";
import { Suspense } from "react";
import type { RouteObject } from "react-router-dom";

const SuperAdminRoutes: RouteObject = {
  path: "/superadmin",
  element: (
    <Authguards allowedRoles="superadmin">
      <SuperAdminPage />
    </Authguards>
  ),
  children: superAdminNav.map((route: NavigationTypes) => ({
    path: route.path,
    element: <Suspense fallback={<Loading />}>{route.component}</Suspense>,
  })),
};
export default SuperAdminRoutes;
