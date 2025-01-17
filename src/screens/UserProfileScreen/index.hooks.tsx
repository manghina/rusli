import { ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import { User } from "@app/models/User";
import {
  ConfigureIcon,
  ContactIcon,
  CredentialsIcon,
  DocumentsIcon,
  EditIcon,
  FAQIcon,
  LogoutIcon,
  PaymentsIcon,
  PlayIcon,
  PrivacyIcon,
  ProfileIcon,
  StarIcon,
  SurveyIcon,
  TermsAndConditionsIcon,
} from "@app/components/SvgIcons";
import { UserEditScreen } from "@app/screens/UserEdit";
import { TutorialScreen } from "@app/screens/Tutorial";
import { LoginScreen } from "@app/screens/Login";
import { ProfileCredentialsScreen } from "../ProfileCredentials";
import { Asset } from "react-native-image-picker";
import { convertImageToBlob, MediaTypes } from "@app/models/Media";
import { useImagePicker } from "@app/hooks/useImagePicker";
import MediaManagerSingleton from "@app/models/MediaManagerSingleton";
import { reviewInAppStore } from "@app/utils/appStore";
import { SettingsScreen } from "../SettingsScreen";
import { ContactUsScreen } from "../ContactUs";
import { FAQSUsercreen } from "../FAQSUsercreen";
import { Professional } from "@app/models/Professional";

type UserProfileMenuItem = {
  label: string;
  icon: ReactElement;
  onPress: () => void;
};

type UserProfileMenu = {
  category: string;
  items: UserProfileMenuItem[];
}[];

export const useUserProfileScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const [shouldSaveProfileImage, setShouldSaveProfileImage] = useState(false);

  const me: User | Professional  | null = useSelector(selectors.getMe);

  const uploadedImage = useSelector(selectors.getUploadedMedia);
  const isUploadingMedia = useSelector(selectors.getIsUploadingMedia);
    
  const handleLogout = useCallback(() => {
    dispatch(actions.clearSession());
    navigation.replace(TutorialScreen.RouteName);
  }, [dispatch, navigation]);

  const profileMenuItems: UserProfileMenu = useMemo(
    () => [
      {
        category: "Principale",
        items: [
          {
            label: "Modifica profilo",
            icon: <EditIcon />,
            onPress: () => navigation.navigate(UserEditScreen.RouteName),
          },
          {
            label: "Credenziali di accesso",
            icon: <CredentialsIcon />,
            onPress: () => navigation.navigate(ProfileCredentialsScreen.RouteName),
          },
          {
            label: "Configura",
            icon: <ConfigureIcon />,
            onPress: () => navigation.navigate(SettingsScreen.RouteName),
          },
          {
            label: "Metodi di pagamento",
            icon: <PaymentsIcon />,
            onPress: () => console.log("Payment methods"),
          },
          {
            label: "Documenti",
            icon: <DocumentsIcon />,
            onPress: () => console.log("Documents"),
          },
        ],
      },
      {
        category: "Supporto",
        items: [
          {
            label: "Rivedi app tutorials",
            icon: <PlayIcon />,
            onPress: () => console.log("Review app tutorials"),
          },
          {
            label: "Termini e condizioni",
            icon: <TermsAndConditionsIcon />,
            onPress: () => console.log("Terms and conditions"),
          },
          {
            label: "Privacy Policy",
            icon: <PrivacyIcon />,
            onPress: () => console.log("Privacy Policy"),
          },
          {
            label: "FAQs",
            icon: <FAQIcon />,
            onPress: () => navigation.navigate(FAQSUsercreen.RouteName),
          },
        ],
      },
      {
        category: "La tua opinione è importante",
        items: [
          {
            label: "Contattaci",
            icon: <ContactIcon />,
            onPress: () => navigation.navigate(ContactUsScreen.RouteName),
          },
          {
            label: "Rispondi al sondaggio",
            icon: <SurveyIcon />,
            onPress: () => console.log("Rispondi al sondaggio"),
          },
          {
            label: "Lascia 5 stelle sull'App Store",
            icon: <StarIcon />,
            onPress: () => reviewInAppStore(),
          },
        ],
      },
      {
        category: "Altro",
        items: [
          {
            label: "Esegui il Logout",
            icon: <LogoutIcon />,
            onPress: handleLogout,
          },
          {
            label: "Gestisci profilo",
            icon: <ProfileIcon />,
            onPress: () => console.log("Gestisci profilo"),
          },
        ],
      },
    ],
    [navigation],
  );

  const onProfilePictureChosen = useCallback(
    async (image: Asset) => {
      const imageBytes = await convertImageToBlob(image.uri!);

      setShouldSaveProfileImage(true);
      MediaManagerSingleton.imageData = imageBytes;

      dispatch(
        actions.mediaUpload({
          fileName: image.fileName!,
          mime: image.type!,
          type: MediaTypes.IMAGE,
          isPrivate: false,
        }),
      );
    },
    [dispatch],
  );

  const { dialog, onImagePickerPressed } = useImagePicker(
    onProfilePictureChosen,
  );

  useEffect(() => {
    if (!me) {
      navigation.replace(LoginScreen.RouteName);
    }
  }, [me, navigation]);

  useEffect(() => {
    if (uploadedImage && shouldSaveProfileImage) {
      dispatch(
        actions.patchUsersMe.request({ profilePictureId: uploadedImage._id }),
      );
      setShouldSaveProfileImage(false);
    }
  }, [dispatch, uploadedImage, shouldSaveProfileImage]);

  return {
    isUploadingMedia,
    me,
    uploadedImage,
    profileMenuItems,
    dialog,
    onImagePickerPressed,
    handleLogout,
  };
};
