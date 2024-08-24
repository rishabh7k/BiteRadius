export interface Place {
  id: string;
  internationalPhoneNumber: string;
  formattedAddress: string;
  location: {
    latitude: number;
    longitude: number;
  };
  rating: number;
  googleMapsUri: string;
  regularOpeningHours: {
    openNow: boolean;
  };
  displayName: {
    text: string;
  };
}

export interface LocationCoords {
  lat: number | null;
  lng: number | null;
}
