import { Card } from "../../ui/card";
import Header from "./components/cardheader";
import Content from "./components/content";
import Footer from "./components/footer";

const Unauthorized = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[350px]">
        <Header />
        <Content />
        <Footer />
      </Card>
    </div>
  );
};

export default Unauthorized;
