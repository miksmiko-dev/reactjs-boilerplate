import { lazy } from "react";

const DashboardPage = lazy(() => import("../admin/dashboard/page.tsx"));
const TransactionsPage = lazy(() => import("../admin/transaction/page.tsx"));
const MembersPage = lazy(() => import("../admin/members/page.tsx"));
const ProfilePage = lazy(() => import("../admin/profile/page.tsx"));

export { DashboardPage, TransactionsPage, MembersPage, ProfilePage };
