import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Header = () => {
  return (
    <CardHeader className="text-center">
      <CardTitle>Unauthorized Access</CardTitle>
      <CardDescription>
        You do not have permission to view this page.
      </CardDescription>
    </CardHeader>
  );
};

export default Header;
