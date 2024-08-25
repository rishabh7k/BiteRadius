import React from "react";
import { ImageComponents } from "@/app/images/component";

interface AddressProp {
  address: string;
}
const Address: React.FC<AddressProp> = ({ address }) => {
  return (
    <div className="text-gray-500 mb-1 flex justify-between p-2">
      <ImageComponents.IconComponents.LocationIcon />
      <div>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default Address;
