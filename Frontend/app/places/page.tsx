"use client";
import React from "react";
import PlaceCard from "./restaurant/card";
import MapComponent from "../maps/mapComponent";
import { Place } from "../models/models";
import "../globals.css";
import { FetchPlaces } from "./fetch";
import { ImageComponents } from "../images/component";
import { useLocationStore } from "@/locationStore/store";
import { LocationCoords } from "../models/models";

const PlaceList = () => {
  const location = useLocationStore((state) => state.location);
  const [places, setPlaces] = React.useState<Place[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] =
    React.useState<LocationCoords | null>(null);
  const [selectedPlace, setSelectedPlace] = React.useState<Place | null>(null);

  React.useEffect(() => {
    const fetchPlaces = async () => {
      if (!location) {
        setError("Invalid location parameters");
        setIsLoading(false);
        return;
      }

      try {
        const fetchedPlaces = await FetchPlaces(location.lat, location.lng);
        setPlaces(fetchedPlaces);

        if (fetchedPlaces.length > 0) {
          const firstPlace = fetchedPlaces[0];
          setSelectedLocation({
            lat: firstPlace.location.latitude,
            lng: firstPlace.location.longitude,
          });
        }
      } catch (err) {
        setError("An error occurred while fetching places");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlaces();
  }, [location]);
  const handlePlaceClick = (lat: number, lng: number) => {
    setSelectedLocation({ lat, lng });
  };
  const handleCardClick = (place: Place) => {
    setSelectedPlace(place);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex items-center justify-center">
          <ImageComponents.LoadingGif />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl text-orange-400">
        {error}
      </div>
    );
  }

  if (places.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl text-orange-400">
        No Places found for your location.
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-slate-50 pl-52 pt-12 pr-7 w-1/2 space-y-4">
        {places.map((place) => (
          <PlaceCard
            key={place.id}
            place={place}
            onClick={() => {
              handleCardClick(place);
              handlePlaceClick(
                place.location.latitude,
                place.location.longitude
              );
            }}
            isSelected={selectedPlace?.id === place.id}
          />
        ))}
      </div>
      <div className="w-1/2 pl-7 pt-12 pr-52 ">
        {selectedLocation && (
          <MapComponent
            lat={selectedLocation.lat || places[0].location.longitude}
            lng={selectedLocation.lng || places[0].location.longitude}
          />
        )}
      </div>
    </div>
  );
};

export default PlaceList;
