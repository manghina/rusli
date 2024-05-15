import React, { memo } from "react";
import { useFormGooglePlacesTextField } from "./index.hooks";
import { Text, View } from "react-native-ui-lib";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { styles } from "./styles";
import { googleMapsApiKey } from "@app/config";
import { BaseTextField } from "@app/components/_baseInputs/BaseTextField";

export type FormGooglePlacesTextFieldProps = {
  name: string;
  placeholder?: string;
  label?: string;
};

export const FormGooglePlacesTextField = memo(
  ({
    name,
    placeholder = "Cerca...",
    label,
  }: FormGooglePlacesTextFieldProps) => {
    const {
      isFocused,
      onBlur,
      onFocus,
      handleChange,
      error,
      handleSelect,
      componentRef,
      value,
    } = useFormGooglePlacesTextField(name);

    return (
      <View style={styles.fieldContainer}>
        {label && <Text style={styles.label}>{label}</Text>}
        {/*
          This is a workaround to avoid the GooglePlacesAutocomplete to rerender on form data change.
          We render a BaseTextField instead of the GooglePlacesAutocomplete when the field is not focused.
        */}
        {!isFocused ? (
          <BaseTextField
            placeholder={placeholder}
            value={value?.description}
            onFocus={onFocus}
            style={Boolean(error) ? styles.fieldWithError : undefined}
          />
        ) : (
          <GooglePlacesAutocomplete
            key={name}
            ref={componentRef}
            placeholder={placeholder}
            onPress={handleSelect}
            fetchDetails={true}
            query={{
              key: googleMapsApiKey(),
              components: "country:it",
              language: "it",
              type: "address",
            }}
            enablePoweredByContainer={false}
            disableScroll={true}
            predefinedPlaces={
              value?.description
                ? [{ description: value.description, geometry: value.geometry }]
                : undefined
            }
            listEmptyComponent={
              <View style={styles.noResultsContainer}>
                <Text style={styles.noResultsText}>
                  Nessun risultato trovato.
                </Text>
              </View>
            }
            textInputProps={{
              onBlur,
              style: styles.input,
              onChange: (e) => handleChange(e.nativeEvent.text),
              autoFocus: true,
            }}
            styles={{
              textInputContainer: [
                styles.field,
                isFocused ? styles.focused : undefined,
                Boolean(error) ? styles.fieldWithError : undefined,
              ],
              poweredContainer: styles.poweredByGoogleContainer,
              listView: styles.listView,
              row: styles.listRow,
            }}
          />
        )}
        {Boolean(error) && <Text style={styles.textError}>{error}</Text>}
      </View>
    );
  },
);
FormGooglePlacesTextField.displayName = "FormGooglePlacesTextField";
