import React from "react";
//import { useState, useEffect } from "react";
//import Image from "next/image";
import ImageComponent from "../images/component";
const FrontPage = () => {
  //const images = ["/momo.jpg", "/biryani.jpg", "/steak.jpg"];
  return (
    // <div className="flex h-screen w-screen">
    //   <div className="flex-1 bg-orange-500" />
    //   <div className="flex-1 bg-slate-500 flex justify-center items-center">
    //     <div className="relative w-1/2 aspect-square overflow-hidden">
    //       {images.map((img, index) => (
    //         <div key={img} className="absolute inset-0">
    //           <Image
    //             src={"http://localhost/" + img}
    //             alt={`Food item ${index + 1}`}
    //             fill
    //             sizes="50vw"
    //             style={{
    //               objectFit: "cover",
    //               animationDelay: `${index * 2}s`,
    //             }}
    //             className="animate-fadeInOut"
    //             priority
    //           />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="flex h-screen">
      <div className="w-2/12 bg-orange-400">
        <ImageComponent />
      </div>
      <div className="w-10/12 flex items-center justify-center bg-gray-800">
        <div className="h-96 w-1/2 flex flex-col items-center bg-gray-800">
          <div className="font-serif text-orange-500 text-7xl">
            🍔BiteRadius🐟
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
