import { IAddress } from ".";

export const initialAddressValues: IAddress = {
  description: "",
  addressComponents: [
    {
      longName: "",
      shortName: "",
      types: [],
    },
  ],
  geometry: {
    location: {
      lat: 0,
      lng: 0,
    },
    viewport: {
      northeast: {
        lat: 0,
        lng: 0,
      },
      southwest: {
        lat: 0,
        lng: 0,
      },
    },
  },
  url: "",
};
