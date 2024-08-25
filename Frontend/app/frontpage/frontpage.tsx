import React from "react";
import { ImageComponents } from "../images/component";
import BannerText from "./bannerText";
import Descriptives from "./descriptives";
const FrontPage = () => {
  return (
    <div className="h-auto flex flex-wrap items-center justify-center">
      <div className="w-auto">
        <div className="flex">
          <BannerText />
          <ImageComponents.ImageBanner />
        </div>
        <Descriptives />
      </div>
    </div>
  );
};

export default FrontPage;
