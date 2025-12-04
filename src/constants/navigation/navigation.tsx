import { Home } from "lucide-react";
import * as ADMIN from "../../pages/authenticated/admin/index.tsx";
import type { NavigationTypes } from "./types/types";

export const navigation: NavigationTypes[] = [
  {
    path: "dashboard",
    name: "Dasbhoard",
    role: "admin",
    icon: <Home />,
    // component: ADMIN.Dashboard,
    component: <ADMIN.Dashboard />,
    isAdmin: true,
    isShow: true,
  },
  {
    path: "transaction",
    name: "Transactions",
    role: "admin",
    icon: <Home />,
    component: <ADMIN.Transactions />,
    isAdmin: true,
    isShow: true,
  },
];
