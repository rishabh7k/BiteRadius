// import React from "react";
// import styles from "./scrolling.module.css";

// const ImageComponent = () => {
//   return (
//     <div className={`${styles.animateScroll} flex flex-col`}>
//       {/* Images duplicated for continuous scrolling */}
//       <img
//         src="http://localhost/momo.jpg"
//         className="w-full h-auto object-cover"
//       />
//       <img
//         src="http://localhost/biryani.jpg"
//         className="w-full h-auto object-cover"
//       />
//       <img
//         src="http://localhost/steak.jpg"
//         className="w-full h-auto object-cover"
//       />
//       <img
//         src="http://localhost/momo.jpg"
//         className="w-full h-auto object-cover"
//       />
//       <img
//         src="http://localhost/biryani.jpg"
//         className="w-full h-auto object-cover"
//       />
//       <img
//         src="http://localhost/steak.jpg"
//         className="w-full h-auto object-cover"
//       />
//     </div>
//   );
// };

// export default ImageComponent;

import React from "react";
import styles from "./scrolling.module.css";
import Image from "next/image";
const ImageBanner = () => {
  return (
    <div className={`${styles.scrollContainer} w-full h-full overflow-hidden`}>
      <div className={`${styles.scrollContent} flex flex-col`}>
        {/* Images duplicated for continuous scrolling */}
        <img
          src="http://localhost/momo.jpg"
          className="w-full h-auto object-cover"
          alt="Momo"
        />
        <img
          src="http://localhost/biryani.jpg"
          className="w-full h-auto object-cover"
          alt="Biryani"
        />
        <img
          src="http://localhost/steak.jpg"
          className="w-full h-auto object-cover"
          alt="Steak"
        />
        {/* Duplicate images for seamless loop */}
        <img
          src="http://localhost/momo.jpg"
          className="w-full h-auto object-cover"
          alt="Momo"
        />
        <img
          src="http://localhost/biryani.jpg"
          className="w-full h-auto object-cover"
          alt="Biryani"
        />
        <img
          src="http://localhost/steak.jpg"
          className="w-full h-auto object-cover"
          alt="Steak"
        />
      </div>
    </div>
  );
};
const LogoComponent = () => {
  return (
    <Image
      src={"http://localhost/logo.png"}
      alt="Logo"
      className="max-w-xs max-h-xs"
      height={180}
      width={180}
    />
  );
  //return <img src="http://localhost/logo.png" alt="Logo" />;
};

//export default ImageComponent;
export const ImageComponents = {
  ImageBanner,
  LogoComponent,
};
