export interface Specs {
  location: {
    lat: number;
    lng: number;
  };
  name: string;
  markerContent(): string;
}
