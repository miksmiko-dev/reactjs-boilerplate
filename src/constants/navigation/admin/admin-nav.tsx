import { Home } from "lucide-react";
import * as ADMIN from "../../../pages/authenticated/admin/index.tsx";
import type { NavigationTypes } from "../types/types.ts";

export const navigation: NavigationTypes[] = [
  {
    path: "/admin/dashboard",
    name: "Dasbhoard",
    role: "admin",
    icon: <Home />,
    component: <ADMIN.DashboardPage />,
    isAdmin: true,
    isShow: true,
  },
  {
    path: "/admin/transaction",
    name: "Transactions",
    role: "admin",
    icon: <Home />,
    component: <ADMIN.TransactionsPage />,
    isAdmin: true,
    isShow: true,
  },
];
