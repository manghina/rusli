import { ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import {
  ConfigureIcon,
  ContactIcon,
  CredentialsIcon,
  DocumentsIcon,
  EditIcon,
  FAQIcon,
  LogoutIcon,
  PlayIcon,
  PrivacyIcon,
  ProfileIcon,
  StarIcon,
  SurveyIcon,
  TermsAndConditionsIcon,
} from "@app/components/SvgIcons";
import { ProfessionalEditPrivateScreen } from "@app/screens/ProfessionalEditPrivate";
import { TutorialScreen } from "@app/screens/Tutorial";
import { LoginScreen } from "@app/screens/Login";
import { Asset } from "react-native-image-picker";
import { convertImageToBlob, MediaTypes } from "@app/models/Media";
import { useImagePicker } from "@app/hooks/useImagePicker";
import { Professional } from "@app/models/Professional";
import MediaManagerSingleton from "@app/models/MediaManagerSingleton";
import { ContactUsScreen } from "../ContactUs";
import { ProfessionalEditPublicScreen } from "../ProfessionalEditPublic";
import { SettingsScreen } from "../SettingsScreen";
import { FAQSUsercreen } from "../FAQSUsercreen";

type ProfessionalProfileMenuItem = {
  label: string;
  icon: ReactElement;
  onPress: () => void;
};

type ProfessionalProfileMenu = {
  category: string;
  items: ProfessionalProfileMenuItem[];
}[];

export const useProfessionalProfileScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const [shouldSaveProfileImage, setShouldSaveProfileImage] = useState(false);

  const me = useSelector(selectors.getMe) as Professional | null;
  const uploadedImage = useSelector(selectors.getUploadedMedia);
  const isUploadingMedia = useSelector(selectors.getIsUploadingMedia);

  const handleLogout = useCallback(() => {
    dispatch(actions.clearSession());
    navigation.replace(TutorialScreen.RouteName);
  }, [dispatch, navigation]);

  const profileMenuItems: ProfessionalProfileMenu = useMemo(
    () => [
      {
        category: "Principale",
        items: [
          {
            label: "Dettagli personali (privato)",
            icon: <EditIcon />,
            onPress: () => navigation.navigate(ProfessionalEditPrivateScreen.RouteName),
          },
          {
            label: "Info professionali (pubblico)",
            icon: <CredentialsIcon />,
            onPress: () => navigation.navigate(ProfessionalEditPublicScreen.RouteName),
          },
          {
            label: "Configura",
            icon: <ConfigureIcon />,
            onPress: () => navigation.navigate(SettingsScreen.RouteName),
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
            onPress: () => console.log("Lascia 5 stelle sull'App Store"),
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
        actions.patchProfessionalsMe.request({
          profilePictureId: uploadedImage._id,
        }),
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
  };
};
