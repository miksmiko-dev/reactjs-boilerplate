import { lazy } from "react";

const DashboardPage = lazy(() => import("../admin/dashboard/page.tsx"));
const TransactionsPage = lazy(() => import("../admin/transaction/page.tsx"));

export { DashboardPage, TransactionsPage };
