import { ArrowRightLeft, Home, UserPen, Users } from "lucide-react";
import * as ADMIN from "../../../pages/authenticated/admin/index.tsx";
import type { NavigationTypes } from "../types/types.ts";

export const adminNav: NavigationTypes[] = [
  {
    path: "/admin/dashboard",
    name: "Dasbhoard",
    role: "admin",
    icon: <Home size={"15"} />,
    component: <ADMIN.DashboardPage />,
    isAdmin: true,
    isShow: true,
  },
  {
    path: "/admin/transaction",
    name: "Transactions",
    role: "admin",
    icon: <ArrowRightLeft size={"15"} />,
    component: <ADMIN.TransactionsPage />,
    isAdmin: true,
    isShow: true,
  },
  {
    path: "/admin/members",
    name: "Members",
    role: "admin",
    icon: <Users size={"15"} />,
    component: <ADMIN.MembersPage />,
    isAdmin: true,
    isShow: true,
    children: [
      {
        path: "/profile",
        role: "admin",
        component: <ADMIN.MembersPage />,
      },
    ],
  },
  {
    path: "/admin/profile",
    name: "Profile",
    role: "admin",
    icon: <UserPen size={"15"} />,
    component: <ADMIN.ProfilePage />,
    isAdmin: true,
    isShow: true,
  },
];
