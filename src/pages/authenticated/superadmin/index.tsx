import { lazy } from "react";

const Dashboard = lazy(() => import("../superadmin/dashboard/page.tsx"));
const Users = lazy(() => import("../superadmin/users/page.tsx"));

export { Dashboard, Users };
