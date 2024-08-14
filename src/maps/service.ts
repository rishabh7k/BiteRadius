import process from "process";
import { RequestBody } from "../useCases/restaurants/models/request.js";
import { MapsRequest } from "./models/request.js";
import axios from "axios";

const USE_CASE_KEY = "restaurant";
const fetchRestaurants = async (req: RequestBody) => {
  return await new Promise(async (resolve, reject) => {
    try {
      const apiKey = process.env.GOOGLE_MAPS_API_KEY;
      const body: MapsRequest = {
        includedTypes: [USE_CASE_KEY],
        maxResultCount: Number(process.env.MAX_RESULTS),
        locationRestriction: {
          circle: {
            center: {
              latitude: req.lat,
              longitude: req.lng,
            },
            radius: Number(process.env.RADIUS),
          },
        },
      };
      const headers = {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "places.displayName,places.formattedAddress,places.rating,places.location",
      };

      const response = await axios.post(
        "https://places.googleapis.com/v1/places:searchNearby?fields=*",
        body,
        { headers }
      );
      resolve(response);
    } catch (error) {
      console.error("Error searching nearby places:", error);
    }
  });
};

export const mapsService = {
  fetchRestaurants,
};
