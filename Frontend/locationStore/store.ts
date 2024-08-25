import { create } from "zustand";
import { LocationCoords } from "@/app/models/models";

type LocationState = {
  location: LocationCoords | null;
  setLocation: (coords: LocationCoords) => void;
};

export const useLocationStore = create<LocationState>((set) => ({
  location: null,
  setLocation: (coords) => set({ location: coords }),
}));
