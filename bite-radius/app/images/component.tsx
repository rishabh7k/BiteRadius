import React from "react";

const ImageBanner = () => {
  return (
    <div className="w-80 h-80 mt-28">
      <img
        src="http://localhost/biryani.jpg"
        alt="description"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  );
};

const LogoComponent = () => {
  return <img src="http://localhost/logo.png" alt="Logo" className="h-14" />;
};

export const ImageComponents = {
  ImageBanner,
  LogoComponent,
};
