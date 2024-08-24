"use client";

import Map from "./component";

const MapComponent = () => {
  const latitude = 37.7749;
  const longitude = -122.4194; // Example: San Francisco coordinates

  return (
    <div>
      <Map lat={latitude} lng={longitude} />
    </div>
  );
};

export default MapComponent;
