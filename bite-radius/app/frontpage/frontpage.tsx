import React from "react";
import { ImageComponents } from "../images/component";
import ClickButton from "../client/components";
const FrontPage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-2/12 bg-orange-400 h-full">
        <ImageComponents.ImageBanner />
      </div>
      <div className="w-10/12 flex flex-col items-center justify-center bg-gray-800">
        <div className="h-auto w-1/2 flex bg-gray-800 ">
          <div className="h-auto font-serif text-orange-500 text-9xl ">
            Bite Radius
          </div>
          <div>
            <ImageComponents.LogoComponent />
          </div>
        </div>
        <ClickButton />
      </div>
    </div>
  );
};

export default FrontPage;
