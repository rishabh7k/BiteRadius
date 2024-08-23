import React from "react";
import { ImageComponents } from "../images/component";
import BannerText from "./bannerText";
import CardList from "./foodCards";
const FrontPage = () => {
  return (
    <div className="h-auto flex flex-wrap items-center justify-center">
      <div className="w-auto">
        <div className="flex">
          <BannerText />
          <ImageComponents.ImageBanner />
        </div>
        <CardList />
      </div>
    </div>
  );
};

export default FrontPage;
