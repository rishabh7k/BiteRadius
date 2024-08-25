import { MapsRequest } from "./models/request.js";
import axios from "axios";

export class MapsService {
  body: MapsRequest;

  constructor(lat: number, lon: number, useCase: string) {
    this.body = new MapsRequest(lat, lon, useCase);
  }

  async fetchPlaces(): Promise<any> {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    if (!apiKey) throw new Error("Google Maps API key is not set");
    const requestBody = this.body;
    const headers = {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask":
        "places.id,places.internationalPhoneNumber,places.formattedAddress,places.location,places.rating,places.regularOpeningHours.openNow,places.displayName.text,places.googleMapsUri",
    };
    if (process.env.GOOGLE_MAPS_URL) {
      const response = await axios.post(
        process.env.GOOGLE_MAPS_URL,
        requestBody,
        { headers }
      );
      return response.data;
    } else {
      return { error: "Google Maps URL is incorrect." };
    }
  }

  //define more methods for services
}
