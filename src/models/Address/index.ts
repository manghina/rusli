import {
  GooglePlaceData,
  GooglePlaceDetail,
} from "react-native-google-places-autocomplete";
import { OfficeLocation } from "@app/models/Professional";

export enum AddressComponentType {
  ADMINISTRATIVE_AREA_LEVEL_1 = "administrative_area_level_1",
  ADMINISTRATIVE_AREA_LEVEL_2 = "administrative_area_level_2",
  ADMINISTRATIVE_AREA_LEVEL_3 = "administrative_area_level_3",
  ADMINISTRATIVE_AREA_LEVEL_4 = "administrative_area_level_4",
  ADMINISTRATIVE_AREA_LEVEL_5 = "administrative_area_level_5",
  ARCHIPELAGO = "archipelago",
  COLLOQUIAL_AREA = "colloquial_area",
  CONTINENT = "continent",
  COUNTRY = "country",
  ESTABLISHMENT = "establishment",
  FINANCE = "finance",
  FLOOR = "floor",
  FOOD = "food",
  GENERAL_CONTRACTOR = "general_contractor",
  GEOCODE = "geocode",
  HEALTH = "health",
  INTERSECTION = "intersection",
  LOCALITY = "locality",
  NATURAL_FEATURE = "natural_feature",
  NEIGHBORHOOD = "neighborhood",
  PLACE_OF_WORSHIP = "place_of_worship",
  PLUS_CODE = "plus_code",
  POINT_OF_INTEREST = "point_of_interest",
  POLITICAL = "political",
  POST_BOX = "post_box",
  POSTAL_CODE = "postal_code",
  POSTAL_CODE_PREFIX = "postal_code_prefix",
  POSTAL_CODE_SUFFIX = "postal_code_suffix",
  POSTAL_TOWN = "postal_town",
  PREMISE = "premise",
  ROOM = "room",
  ROUTE = "route",
  STREET_ADDRESS = "street_address",
  STREET_NUMBER = "street_number",
  SUBLOCALITY = "sublocality",
  SUBLOCALITY_LEVEL_1 = "sublocality_level_1",
  SUBLOCALITY_LEVEL_2 = "sublocality_level_2",
  SUBLOCALITY_LEVEL_3 = "sublocality_level_3",
  SUBLOCALITY_LEVEL_4 = "sublocality_level_4",
  SUBLOCALITY_LEVEL_5 = "sublocality_level_5",
  SUBPREMISE = "subpremise",
  TOWN_SQUARE = "town_square",
}

export interface IAddress {
  description: string; // Full address
  addressComponents: {
    longName: string;
    shortName: string;
    types: AddressComponentType[];
  }[];
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  };
  url: string;
}

export class Address implements IAddress {
  description!: string;
  addressComponents!: {
    longName: string;
    shortName: string;
    types: AddressComponentType[];
  }[];
  geometry!: {
    location: {
      lat: number;
      lng: number;
    };
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  };
  url!: string;

  static fromGooglePlacesAutocompleteInterface(
    data: GooglePlaceData,
    detail: GooglePlaceDetail,
  ) {
    return new Address({
      description: data.description,
      addressComponents:
        detail.address_components.map((component) => ({
          longName: component.long_name,
          shortName: component.short_name,
          types: component.types as AddressComponentType[],
        })) || [],
      geometry: detail.geometry,
      url: detail.url,
    });
  }

  constructor(iAddress: IAddress) {
    this.description = iAddress.description;
    this.addressComponents = iAddress.addressComponents;
    this.geometry = iAddress.geometry;
    this.url = iAddress.url;
  }

  get streetAddress(): string {
    const route = this.addressComponents.find((addressComponent) =>
      addressComponent.types.includes(AddressComponentType.ROUTE),
    );
    const streetNumber = this.addressComponents.find((addressComponent) =>
      addressComponent.types.includes(AddressComponentType.STREET_NUMBER),
    );

    if (!route || !streetNumber) {
      return "Indirizzo non disponibile";
    }

    return `${route.longName}, ${streetNumber.longName}`;
  }

  get cityAndProvince(): string {
    const city = this.addressComponents.find((addressComponent) =>
      addressComponent.types.includes(AddressComponentType.LOCALITY),
    );
    const province = this.addressComponents.find((addressComponent) =>
      addressComponent.types.includes(
        AddressComponentType.ADMINISTRATIVE_AREA_LEVEL_2,
      ),
    );

    if (!city || !province) {
      return "Città e provincia non disponibili";
    }

    return `${city.longName} (${province.shortName})`;
  }

  getValues() {
    return {
      description: this.description,
      addressComponents: this.addressComponents,
      geometry: this.geometry,
      url: this.url,
    };
  }
}
