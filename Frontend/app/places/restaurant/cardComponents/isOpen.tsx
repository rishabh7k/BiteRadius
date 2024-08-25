import React from "react";

interface IsOpenProp {
  isOpen: boolean | undefined;
}

const IsOpen: React.FC<IsOpenProp> = ({ isOpen }) => {
  if (isOpen === undefined)
    return (
      <p className={`bg-gray-700 ml-auto rounded-lg text-white text-xs p-1`}>
        {"Unsure"}
      </p>
    );

  return (
    <p
      className={` ${
        isOpen ? "bg-green-600" : "bg-red-600"
      } ml-auto rounded-lg text-white text-xs p-1`}
    >
      {isOpen ? "Open Now" : "Closed"}
    </p>
  );
};

export default IsOpen;
