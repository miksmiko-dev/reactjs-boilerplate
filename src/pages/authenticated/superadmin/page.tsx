import MainLayout from "@/components/template/mainlayout/layout";

const SuperAdminPage = () => {
  const role = "superadmin";
  return <MainLayout role={role} />;
};

export default SuperAdminPage;
