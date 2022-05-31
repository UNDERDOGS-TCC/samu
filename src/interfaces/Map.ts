export interface LatLng {
  lat: number;
  lng: number;
}

export interface MapGenericApiResponse {
  message: string;
  success: boolean;
}

export interface LocationApiResponse extends MapGenericApiResponse {
  data: LatLng;
}
