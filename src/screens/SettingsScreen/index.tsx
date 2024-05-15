import React from "react";
import { View, Text, TouchableOpacity } from "react-native-ui-lib";
import { userProfileStyles } from "./styles";
import { useSettingsProfileScreen } from "./index.hooks";
import { ScreenView } from "@app/components/_ui/ScreenView/ScreenView";

export const SettingsScreen = () => {
  const { profileMenuItems } = useSettingsProfileScreen();

  const renderMenu = () => (
    <>
      <View style={userProfileStyles.menuContainer}>
        {profileMenuItems.map(({ category, items }) => (
          <View key={category} style={userProfileStyles.menuCategory}>
            <Text style={userProfileStyles.menuCatergoryTitle}>{category}</Text>
            {items.map(({ icon, label, onPress }) => (
              <TouchableOpacity key={label} onPress={onPress}>
                <View style={userProfileStyles.menuItem}>
                  {icon}
                  <Text style={userProfileStyles.menuItemText}>{label}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </>
  );

  return <ScreenView hasScroll={false}>{renderMenu()}</ScreenView>;
};

SettingsScreen.displayName = "SettingsScreen";
SettingsScreen.RouteName = "settings" as const;
