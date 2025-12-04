import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Header = () => {
  return (
    <CardHeader className="text-center">
      <CardTitle>Welcome Back!</CardTitle>
      <CardDescription>Sign in to your account to continue.</CardDescription>
    </CardHeader>
  );
};

export default Header;
