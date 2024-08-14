export interface MapsRequest {
  includedTypes: string[];
  maxResultCount: number;
  locationRestriction: {
    circle: {
      center: {
        latitude: number;
        longitude: number;
      };
      radius: number;
    };
  };
}
