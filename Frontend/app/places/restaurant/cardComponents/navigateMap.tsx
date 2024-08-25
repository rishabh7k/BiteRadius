import React from "react";
import { ImageComponents } from "@/app/images/component";

interface NavigateProp {
  mapsUri: string;
}
const NavigateMap: React.FC<NavigateProp> = ({ mapsUri }) => {
  return (
    <a
      href={mapsUri}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline block"
    >
      <ImageComponents.IconComponents.MapIcon />
    </a>
  );
};

export default NavigateMap;
