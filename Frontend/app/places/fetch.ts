import axios from "axios";
import { Place } from "../models/models";

export const FetchPlaces = async (
  lat: number,
  lng: number
): Promise<Place[] | any> => {
  const body = {
    lat,
    lng,
    type: "restaurant",
  };
  try {
    const url = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    if (typeof url === "string") {
      const response = await axios.post(url, body);
      var yy: { places: Place[] } = { places: [] };
      yy = response.data;
      return yy.places;
    } else throw new Error("Backend API Url is undefined or not a string");
  } catch (error) {
    console.error("Error fetching places:", error);
    throw error;
  }
};
