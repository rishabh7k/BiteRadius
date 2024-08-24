"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LocationCoords } from "../models/models";

const ExploreButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const position = await getCurrentPosition();
      const location: LocationCoords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      if (
        typeof location.lat === "number" &&
        typeof location.lng === "number"
      ) {
        const queryParams = new URLSearchParams({
          lat: location.lat.toString(),
          lng: location.lng.toString(),
        }).toString();

        router.push(`/places?${queryParams}`);
      } else {
        router.push(`/places`);
      }
    } catch (error) {
      console.error("Error getting location:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="bg-orange-600 text-sm font-light w-28 rounded-lg text-white p-1 mb-3 disabled:opacity-50"
    >
      {isLoading ? "Loading..." : "Explore"}
    </button>
  );
};

const getCurrentPosition = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by this browser."));
    } else {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    }
  });
};

export default ExploreButton;
