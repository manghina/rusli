import React from "react";
import { useProfessionalProfileScreen } from "./index.hooks";
import { View, Text, TouchableOpacity } from "react-native-ui-lib";
import { Pressable } from "react-native";
import { styles } from "./styles";
import ImageIcon from "@app/components/SvgIcons/ImageIcon";
import { colorTokens } from "@app/theme/colors/tokens";
import EditImageIcon from "@app/components/SvgIcons/EditImageIcon";
import { Avatar } from "@app/components/Avatar";
import { ScreenView } from "@app/components/_ui/ScreenView/ScreenView";

export const ProfessionalProfileScreen = () => {
  const {
    isUploadingMedia,
    me,
    uploadedImage,
    profileMenuItems,
    dialog,
    onImagePickerPressed,
  } = useProfessionalProfileScreen();

  if (!me) {
    return <View />;
  }

  const renderProfileData = () => (
    <View style={styles.profileInfoContainer}>
      <Pressable onPress={isUploadingMedia ? undefined : onImagePickerPressed}>
        <View
          style={[
            styles.avatarContainer,
            !isUploadingMedia && !me?.profilePictureUrl
              ? styles.accentBackground
              : undefined,
          ]}
        >
          <Avatar data={me} size="large" type="professional" />
          <View style={styles.editImageButton}>
            {uploadedImage ? (
              <EditImageIcon
                size={48}
                color={
                  isUploadingMedia ? colorTokens.colorIconDisabled : undefined
                }
              />
            ) : (
              <ImageIcon
                size={48}
                color={
                  isUploadingMedia ? colorTokens.colorIconDisabled : undefined
                }
              />
            )}
          </View>
        </View>
      </Pressable>
      <Text style={styles.profileInfoText}>
        {me?.name} {me?.lastName}
      </Text>
    </View>
  );

  const renderMenu = () => (
    <>
      <View style={styles.menuContainer}>
        {profileMenuItems.map(({ category, items }) => (
          <View key={category} style={styles.menuCategory}>
            <Text style={styles.menuCatergoryTitle}>{category}</Text>
            {items.map(({ icon, label, onPress }, index) => (
              <TouchableOpacity key={index} onPress={onPress}>
                <View style={styles.menuItem}>
                  {icon}
                  <Text style={styles.menuItemText}>{label}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </>
  );

  return (
    <ScreenView>
      {renderProfileData()}
      {renderMenu()}
      {dialog}
    </ScreenView>
  );
};

ProfessionalProfileScreen.displayName = "ProfessionalProfileScreen";
ProfessionalProfileScreen.RouteName = "professional-profile" as const;
