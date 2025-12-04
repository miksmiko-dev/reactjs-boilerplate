import MainLayout from "@/components/template/mainlayout/layout";

const AdminPage: React.FC = () => {
  const role = "admin";
  return <MainLayout role={role} />;
};

export default AdminPage;
