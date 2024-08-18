import React from "react";
import styles from "./scrolling.module.css";

const ImageComponent = () => {
  return (
    <div className={`${styles.animateScroll} flex flex-col`}>
      {/* Images duplicated for continuous scrolling */}
      <img
        src="http://localhost/momo.jpg"
        className="w-full h-auto object-cover"
      />
      <img
        src="http://localhost/biryani.jpg"
        className="w-full h-auto object-cover"
      />
      <img
        src="http://localhost/steak.jpg"
        className="w-full h-auto object-cover"
      />
      <img
        src="http://localhost/momo.jpg"
        className="w-full h-auto object-cover"
      />
      <img
        src="http://localhost/biryani.jpg"
        className="w-full h-auto object-cover"
      />
      <img
        src="http://localhost/steak.jpg"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default ImageComponent;
