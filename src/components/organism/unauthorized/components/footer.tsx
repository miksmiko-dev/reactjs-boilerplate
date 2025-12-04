import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <CardFooter className="flex justify-center">
      <Link to="/login">
        <Button>Go to Login</Button>
      </Link>
    </CardFooter>
  );
};

export default footer;
