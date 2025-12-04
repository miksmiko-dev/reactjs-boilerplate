import { Home } from "lucide-react";
import * as SUPERADMIN from "../../../pages/authenticated/superadmin/index.tsx";
import type { NavigationTypes } from "../types/types.ts";

export const superAdminNav: NavigationTypes[] = [
  {
    path: "/superadmin/dashboard",
    name: "Dasbhoard",
    role: "superadmin",
    icon: <Home />,
    // component: ADMIN.Dashboard,
    component: <SUPERADMIN.Dashboard />,
    isAdmin: true,
    isShow: true,
  },
  {
    path: "/superadmin/users",
    name: "Users",
    role: "superadmin",
    icon: <Home />,
    component: <SUPERADMIN.Users />,
    isAdmin: true,
    isShow: true,
  },
];
