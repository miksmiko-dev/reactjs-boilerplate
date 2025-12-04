import React from "react";
import { Spinner } from "@/components/ui/spinner";
import { Separator } from "@/components/ui/separator";

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      {/* <Spinner variant="geometric" size="lg" /> */}
      {/* <Separator orientation='vertical' className='h-2- w-4' /> */}
      <Spinner variant="pulsating" size="lg" />
    </div>
  );
};

export default Loading;
