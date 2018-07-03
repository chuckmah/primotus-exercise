export interface GpsCoordinates {
  longitude?: number;
  latitude?: number;
  accuracy?: number;
  lastUpdated?: string;
}

export interface Weather {
  main: {
    temp?: number,
    pressure?: number,
    humidity?: number,
    temp_min?: number,
    temp_max?: number,
    sea_level?: number,
    grnd_level?: number
  }
  name? : string,
  lastUpdated?: string;
}