export class MapsRequest {
  includedTypes: string[];
  maxResultCount: number;
  locationRestriction: {
    circle: {
      center: {
        latitude: number | null;
        longitude: number | null;
      };
      radius: number;
    };
  };

  constructor(lat: number, lon: number, useCase: string) {
    this.includedTypes = [useCase || "restaurant"];
    this.maxResultCount = Number(process.env.MAX_RESULTS) || 5;
    this.locationRestriction = {
      circle: {
        center: {
          latitude: lat,
          longitude: lon,
        },
        radius: Number(process.env.RADIUS) || 500,
      },
    };
  }
}
