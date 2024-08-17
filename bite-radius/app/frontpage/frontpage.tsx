import React from "react";
//import { useState, useEffect } from "react";
import Image from "next/image";

const FrontPage = () => {
  const images = ["/momo.jpg", "/biryani.jpg", "/steak.jpg"];
  return (
    <div className="flex h-screen w-screen">
      <div className="flex-1 bg-orange-500" />
      <div className="flex-1 bg-slate-500 flex justify-center items-center">
        <div className="relative w-1/2 aspect-square overflow-hidden">
          {images.map((img, index) => (
            <div key={img} className="absolute inset-0">
              <Image
                src={"http://localhost/" + img}
                alt={`Food item ${index + 1}`}
                fill
                sizes="50vw"
                style={{
                  objectFit: "cover",
                  animationDelay: `${index * 2}s`,
                }}
                className="animate-fadeInOut"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
