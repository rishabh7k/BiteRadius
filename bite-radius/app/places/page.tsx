"use client";
import "../../app/globals.css";
import styles from "./body.module.css";

import React from "react";
import PlaceCard from "./restaurant/card";
import { Place } from "../models/models";
import axios from "axios";
import "../../app/globals.css";
import { useSearchParams } from "next/navigation";

const fetchFromApi = async (lat: number, lng: number): Promise<Place[]> => {
  const url = "http://localhost:3223/fetch/places";
  const body = {
    lat,
    lng,
    type: "restaurant",
  };
  try {
    const response = await axios.post(url, body);
    var yy: { places: Place[] } = { places: [] };
    yy = response.data;
    return yy.places;
  } catch (error) {
    console.error("Error fetching places:", error);
    return [];
  }
};

const PlaceList = () => {
  const searchParams = useSearchParams();
  const lat = parseFloat(searchParams.get("lat") || "0");
  const lng = parseFloat(searchParams.get("lng") || "0");

  const [places, setPlaces] = React.useState<Place[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchPlaces = async () => {
      if (lat === 0 && lng === 0) {
        setError("Invalid location parameters");
        setIsLoading(false);
        return;
      }

      try {
        const fetchedPlaces = await fetchFromApi(lat, lng);
        setPlaces(fetchedPlaces);
      } catch (err) {
        setError("An error occurred while fetching places");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlaces();
  }, [lat, lng]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (places.length === 0) {
    return <div>No places found.</div>;
  }

  return (
    <div className={`w-1/2 space-y-4 `}>
      {places.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </div>
  );
};

export default PlaceList;
