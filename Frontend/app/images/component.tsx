import React from "react";

const ImageBanner = () => {
  return (
    <div className="w-80 h-80 mt-28">
      <img
        src="/assets/banner/biryani.jpg"
        alt="description"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  );
};

const DescriptiveComponent = () => {
  const descriptives = [
    {
      text: "Fresh",
      imgSrc: "/assets/descriptives/food-card1.jpg",
    },
    {
      text: "Nearby",
      imgSrc: "/assets/descriptives/food-card2.jpg",
    },
    {
      text: "Delicious",
      imgSrc: "/assets/descriptives/food-card3.jpg",
    },
  ];

  return (
    <div className="flex items-center justify-center space-x-32 mt-16">
      {descriptives.map((value, index) => (
        <div
          key={index}
          className="flex w-36 h-16 items-center justify-center space-x-2 shadow-lg rounded-lg hover:scale-125 transition-transform duration-300"
        >
          <img
            src={value.imgSrc}
            alt={value.text}
            className="w-14 h-14 object-contain"
          />
          <div className="text-xs text-gray-500 font-bold">{value.text}</div>
        </div>
      ))}
    </div>
  );
};
const LocationIcon = () => {
  return (
    <div>
      <img
        src="/assets/icons/loc.jpg"
        className="w-full h-full object-contain"
        alt="loc"
      />
    </div>
  );
};
const CallIcon = () => {
  return <img src="/assets/icons/call.jpg" className="h-9 w-9" alt="call" />;
};
const MapIcon = () => {
  return <img src="/assets/icons/map.jpg" className="h-9 w-9" alt="map" />;
};
const IconComponents = {
  LocationIcon,
  CallIcon,
  MapIcon,
};

const LoadingGif = () => {
  return (
    <img src="/assets/loading.gif" alt="loading" className="w-72 h-auto" />
  );
};

const LogoComponent = () => {
  return <img src="/assets/logo/logo.png" alt="Logo" className="h-14" />;
};

export const ImageComponents = {
  ImageBanner,
  LogoComponent,
  DescriptiveComponent,
  IconComponents,
  LoadingGif,
};
