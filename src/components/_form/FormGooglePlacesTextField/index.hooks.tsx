import useFormField from "@app/hooks/useFormField";
import { Address, IAddress } from "@app/models/Address";
import { initialAddressValues } from "@app/models/Address/constantData";
import { useCallback, useState } from "react";
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocompleteRef,
} from "react-native-google-places-autocomplete";

export const useFormGooglePlacesTextField = (name: string) => {
  const [isFocused, setIsFocused] = useState(false);

  const { value, setValue, error } = useFormField<IAddress>({
    name,
  });

  const componentRef = useCallback(
    (instance: GooglePlacesAutocompleteRef) => {
      if (instance && !instance.getAddressText() && value?.description) {
        instance.setAddressText(value.description);
      }
    },
    [value],
  );

  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, [setIsFocused]);

  const onBlur = useCallback(() => {
    setIsFocused(false);
  }, [setIsFocused]);

  const handleChange = useCallback(
    (newValue: string) => {
      if (!newValue) {
        setValue(initialAddressValues);
      }
    },
    [setValue, name],
  );

  const handleSelect = useCallback(
    (data: GooglePlaceData, detail: GooglePlaceDetail | null) => {
      if (data && detail && data.description !== value?.description) {
        setValue(
          Address.fromGooglePlacesAutocompleteInterface(
            data,
            detail,
          ).getValues(),
        );
      }
    },
    [setValue, value],
  );

  return {
    isFocused,
    handleChange,
    error,
    onFocus,
    onBlur,
    handleSelect,
    componentRef,
    value,
  };
};
