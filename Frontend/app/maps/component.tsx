import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "530px",
};

interface MapProps {
  lat: number;
  lng: number;
}

const Map: React.FC<MapProps> = ({ lat, lng }) => {
  const center = {
    lat: lat,
    lng: lng,
  };
  var api_key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (typeof api_key === "string") {
    return (
      <LoadScript googleMapsApiKey={api_key}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    );
  } else
    return (
      <div className="text-orange-500">
        <p>Error Connecting to Google Maps</p>
      </div>
    );
};

export default React.memo(Map);
