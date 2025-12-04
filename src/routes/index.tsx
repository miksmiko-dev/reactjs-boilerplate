import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminRoutes from "./role-routes/admin.tsx";
import SuperAdminRoutes from "./role-routes/superadmin.tsx";
import NotFound from "@/components/organism/notfound/notfound.tsx";
import LoginPage from "@/pages/unauthenticated/login/page.tsx";
import { Unauthorized } from "@/components/organism/index.tsx";

const RootRoutes = () => {
  const router = createBrowserRouter([
    AdminRoutes,
    SuperAdminRoutes,
    { path: "/login", element: <LoginPage /> },
    { path: "/unauthorized", element: <Unauthorized /> },
    { path: "*", element: <NotFound /> },
  ]);

  return <RouterProvider router={router} />;
};

export default RootRoutes;
