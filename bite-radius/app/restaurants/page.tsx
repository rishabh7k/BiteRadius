import "../../app/globals.css";
import styles from "./body.module.css";
// import React from "react";
// import MapComponent from "../maps/component";
// import PlaceCard from "./restaurant/card";
// import { Place } from "../models/models";
// import axios from "axios";
// //import "../app/globals.css";
// import "C:/Users/risha/Documents/BiteRadius/Frontend/bite-radius/app/globals.css";
// const fetchfromapi = async () => {
//   var url = "http://localhost:3223/fetch/places";
//   var body = {
//     lat: 28.7040592, //LOCATION DELHI    LATITUDE  28.70405920    LONGITUDE  77.10249020  ,
//     lng: 77.1024902,
//     type: "restaurant",
//   };
//   var response = await axios.post(url, body);
//   return response.data as Place[];
// };
//"use client";
const placesData = [
  {
    id: "ChIJT8WmiRazvzsRcsR8Jvcc0xE",
    internationalPhoneNumber: "+91 96738 76971",
    formattedAddress: "Kayji Palladium, Aquem, Davarlim, Goa 403601, India",
    location: {
      latitude: 15.2724804,
      longitude: 73.9792705,
    },
    rating: 4.7,
    googleMapsUri: "https://maps.google.com/?cid=1284402166558934130",
    regularOpeningHours: {
      openNow: true,
    },
    displayName: {
      text: "KFC",
    },
  },
];
// interface PlaceListProps {
//   places: Place[];
// }
// const PlaceList: React.FC<PlaceListProps> = async ({ places }) => {
//   return (
//     <div className="space-y-4">
//       {placesData.map((place) => (
//         <PlaceCard key={place.id} place={place} />
//       ))}
//     </div>
//   );
// };
// export default PlaceList;
import React from "react";
import PlaceCard from "./restaurant/card";
import { Place } from "../models/models";
import axios from "axios";
import "../../app/globals.css";

const fetchfromapi = async (): Promise<Place[]> => {
  const url = "http://localhost:3223/fetch/places";
  const body = {
    lat: 28.7040592,
    lng: 77.1024902,
    type: "restaurant",
  };
  try {
    const response = await axios.post(url, body);
    var yy: { places: Place[] } = { places: [] };
    yy = response.data;
    return yy.places; //response.data as Place[];
  } catch (error) {
    console.error("Error fetching places:", error);
    return [];
  }
};

const PlaceList = async () => {
  var places: Place[] = [];
  places = await fetchfromapi();

  if (places.length === 0) {
    return <div>No places found or error occurred while fetching data.</div>;
  }
  if (!Array.isArray(places)) {
    console.error("Expected an array but got:", places);
    return <div>An error occurred: fetched data is not an array.</div>;
  }
  return (
    <div className={`w-1/2 space-y-4 `}>
      {places.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </div>
  );
};
// ${styles.body}
export default PlaceList;
