import React from "react";
import { ImageComponents } from "@/app/images/component";

interface ContactProp {
  contact: string;
}
const Contact: React.FC<ContactProp> = ({ contact }) => {
  return (
    <a className="text-gray-600" href={`tel:${contact}`}>
      <ImageComponents.IconComponents.CallIcon />
    </a>
  );
};

export default Contact;
