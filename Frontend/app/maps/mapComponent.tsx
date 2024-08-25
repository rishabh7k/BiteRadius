"use client";
import Map from "./component";

interface MapComponentProps {
  lat: number;
  lng: number;
}

const MapComponent: React.FC<MapComponentProps> = ({ lat, lng }) => {
  return <Map lat={lat} lng={lng} />;
};

export default MapComponent;
