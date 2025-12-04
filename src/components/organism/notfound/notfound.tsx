import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[350px]">
        <CardHeader className="text-center">
          <CardTitle>404 - Page Not Found</CardTitle>
          <CardDescription>
            The page you are looking for does not exist.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          It looks like you might have followed a broken link or entered a URL
          that doesn't exist on this site.
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link to="/">
            <Button>Go to Home</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NotFound;
