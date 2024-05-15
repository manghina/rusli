import { Colors } from "./palette";
import {Appearance, useColorScheme} from 'react-native';

const colorTokensLight = {
  colorTextDefault: Colors.Neutral[1000],
  colorTextSubtle: Colors.Neutral[700],
  colorTextSubtlest: Colors.Neutral[700],
  colorTextInverse: Colors.Neutral[0],
  colorTextDisabled: Colors.NeutralAlpha[400],
  colorTextSelected: Colors.Blue[700],
  colorTextBrand: Colors.Blue[700],
  colorTextDanger: Colors.Red[800],
  colorTextWarning: Colors.Orange[600],
  colorTextWarningInverse: Colors.Yellow[300],
  colorTextSuccess: Colors.Green[600],
  colorTextDiscovery: Colors.Purple[600],
  colorTextInformation: Colors.Blue[600],
  colorTextAccent: Colors.Blue[700],
  colorTextAccentRead: Colors.Red[800],
  colorTextAccentRedBolder: Colors.Red[900],
  colorTextAccentOrange: Colors.Orange[800],
  colorTextAccentOrangeBolder: Colors.Orange[900],
  colorTextAccentYellow: Colors.Yellow[800],
  colorTextAccentYellowBolder: Colors.Yellow[900],
  colorTextAccentLime: Colors.Lime[600],
  colorTextAccentLimeBolder: Colors.Lime[900],
  colorTextAccentGreen: Colors.Green[600],
  colorTextAccentGreenBolder: Colors.Green[900],
  colorTextAccentTeal: Colors.Teal[800],
  colorTextAccentTealBolder: Colors.Teal[900],
  colorTextAccentBlue: Colors.Blue[800],
  colorTextAccentBlueBolder: Colors.Blue[900],
  colorTextAccentPurple: Colors.Purple[900],
  colorTextAccentPurpleBolder: Colors.Purple[900],
  colorTextAccentMagenta: Colors.Magenta[800],
  colorTextAccentMagentaBolder: Colors.Magenta[900],
  colorTextAccentGraySubtlest: Colors.Neutral[100],
  colorTextAccentGraySubtler: Colors.Neutral[200],
  colorTextAccentGraySubtle: Colors.Neutral[400],
  colorTextAccentGray: Colors.Neutral[800],
  colorTextAccentGrayBolder: Colors.Neutral[1100],
  colorTextAlternative: Colors.Neutral[0],
  colorTextAlternativeSubtle: Colors.Neutral[200],
  colorTextAlternativeSubtlest: Colors.Neutral[400],

  // Token per i link
  colorTextLink: Colors.Blue[700],
  colorTextLinkPressed: Colors.Blue[800],

  // Token per le icone
  colorIcon: Colors.Neutral[800],
  colorIconSubtle: Colors.Neutral[700],
  colorIconInverse: Colors.Neutral[0],
  colorIconDisabled: Colors.Neutral[400],
  colorIconAlternativeDisabled: Colors.Unlisted.IconAlternativeDisabled,
  colorIconSelected: Colors.Blue[700],
  colorIconBrand: Colors.Brand[400],
  colorIconDanger: Colors.Red[600],
  colorIconWarning: Colors.Orange[600],
  colorIconSuccess: Colors.Green[600],
  colorIconDiscovery: Colors.Purple[600],
  colorIconInformation: Colors.Blue[600],
  colorIconAccentRed: Colors.Red[600],
  colorIconAccentOrange: Colors.Orange[600],
  colorIconAccentYellow: Colors.Yellow[600],
  colorIconAccentLime: Colors.Lime[600],
  colorIconAccentGreen: Colors.Green[600],
  colorIconAccentTeal: Colors.Teal[600],
  colorIconAccentBlue: Colors.Blue[600],
  colorIconAccentPurple: Colors.Purple[600],
  colorIconAccentMagenta: Colors.Magenta[600],
  colorIconAccentGray: Colors.Neutral[600],

  // Token per i bordi
  colorBorder: Colors.Neutral[300],
  colorBorderBold: Colors.Neutral[600],
  colorBorderInverse: Colors.Neutral[0],
  colorBorderAlternative: Colors.Neutral[0],
  colorBorderDisabled: Colors.Neutral[200],
  colorBorderFocused: Colors.Blue[500],
  colorBorderSelected: Colors.Blue[700],
  colorBorderInput: Colors.Neutral[300],
  colorBorderBrand: Colors.Blue[700],
  colorBorderDanger: Colors.Red[600],
  colorBorderWarning: Colors.Orange[600],
  colorBorderSuccess: Colors.Green[600],
  colorBorderDiscovery: Colors.Purple[600],
  colorBorderInformation: Colors.Blue[600],
  colorBorderAccentRed: Colors.Red[600],
  colorBorderAccentOrange: Colors.Orange[600],
  colorBorderAccentYellow: Colors.Yellow[600],
  colorBorderAccentLime: Colors.Lime[600],
  colorBorderAccentGreen: Colors.Green[600],
  colorBorderAccentTeal: Colors.Teal[600],
  colorBorderAccentBlue: Colors.Blue[600],
  colorBorderAccentPurple: Colors.Purple[600],
  colorBorderAccentMagenta: Colors.Magenta[600],
  colorBorderAccentGray: Colors.Neutral[600],
  colorBorderAccentGrayBolder: Colors.Neutral[1100],
  colorBackgroundAccentRedSubtlest: Colors.Red[100],
  colorBackgroundAccentRedSubtler: Colors.Red[200],
  colorBackgroundAccentRedSubtle: Colors.Red[400],
  colorBackgroundAccentRedBolder: Colors.Red[700],
  colorBackgroundAccentOrangeSubtlest: Colors.Orange[100],
  colorBackgroundAccentOrangeSubtler: Colors.Orange[200],
  colorBackgroundAccentOrangeSubtle: Colors.Orange[400],
  colorBackgroundAccentOrangeBolder: Colors.Orange[700],
  colorBackgroundAccentYellowSubtlest: Colors.Yellow[100],
  colorBackgroundAccentYellowSubtler: Colors.Yellow[200],
  colorBackgroundAccentYellowSubtle: Colors.Yellow[400],
  colorBackgroundAccentYellowBolder: Colors.Yellow[700],
  colorBackgroundAccentLimeSubtlest: Colors.Lime[100],
  colorBackgroundAccentLimeSubtler: Colors.Lime[200],
  colorBackgroundAccentLimeSubtle: Colors.Lime[400],
  colorBackgroundAccentLimeBolder: Colors.Lime[700],
  colorBackgroundAccentGreenSubtlest: Colors.Green[100],
  colorBackgroundAccentGreenSubtler: Colors.Green[200],
  colorBackgroundAccentGreenSubtle: Colors.Green[400],
  colorBackgroundAccentGreenBolder: Colors.Green[700],
  colorBackgroundAccentTealSubtlest: Colors.Teal[100],
  colorBackgroundAccentTealSubtler: Colors.Teal[200],
  colorBackgroundAccentTealSubtle: Colors.Teal[400],
  colorBackgroundAccentTealBolder: Colors.Teal[700],
  colorBackgroundAccentBlueSubtlest: Colors.Blue[100],
  colorBackgroundAccentBlueSubtler: Colors.Blue[200],
  colorBackgroundAccentBlueSubtle: Colors.Blue[400],
  colorBackgroundAccentBlueBolder: Colors.Blue[800],
  colorBackgroundAccentPurpleSubtlest: Colors.Purple[100],
  colorBackgroundAccentPurpleSubtler: Colors.Purple[200],
  colorBackgroundAccentPurpleSubtle: Colors.Purple[400],
  colorBackgroundAccentPurpleBolder: Colors.Purple[700],
  colorBackgroundAccentMagentaSubtlest: Colors.Magenta[100],
  colorBackgroundAccentMagentaSubtler: Colors.Magenta[200],
  colorBackgroundAccentMagentaSubtle: Colors.Magenta[400],
  colorBackgroundAccentMagentaBolder: Colors.Magenta[700],
  colorBackgroundAccentGraySubtlest: Colors.Neutral[200],
  colorBackgroundAccentGraySubtler: Colors.Neutral[300],
  colorBackgroundAccentGraySubtle: Colors.Neutral[500],
  colorBackgroundAccentGrayBolder: Colors.Neutral[700],
  colorBackgroundDisabled: Colors.Neutral[100],
  colorBackgroundInput: Colors.Neutral[0],
  colorBackgroundInverseSubtle: "#00000029",
  colorBackgroundNeutralSubtle: "Transparent",
  colorBackgroundNeutral: Colors.NeutralAlpha[300],
  colorBackgroundNeutralBold: Colors.Neutral[800],
  colorBackgroundSelected: Colors.Blue[100],
  colorBackgroundSelectedBold: Colors.Blue[700],

  colorBackgroundBrandSubtlest: Colors.Blue[100],
  colorBackgroundBrandSubtler: Colors.Blue[200],
  colorBackgroundBrandSubtle: Colors.Blue[300],
  colorBackgroundBrandBold: Colors.Blue[700],
  colorBackgroundBrandBoldestHovered: Colors.Blue[800],
  colorBackgroundBrandBoldestPressed: Colors.Blue[900],

  colorBackgroundDanger: Colors.Red[100],
  colorBackgroundDangerHovered: Colors.Red[200],
  colorBackgroundDangerPressed: Colors.Red[300],
  colorBackgroundDangerBold: Colors.Red[700],
  colorBackgroundDangerBoldHovered: Colors.Red[800],
  colorBackgroundDangerBoldPressed: Colors.Red[900],

  colorBackgroundWarning: Colors.Yellow[100],
  colorBackgroundWarningHovered: Colors.Yellow[200],
  colorBackgroundWarningPressed: Colors.Yellow[300],
  colorBackgroundWarningBold: Colors.Yellow[500],
  colorBackgroundWarningBoldHovered: Colors.Yellow[600],
  colorBackgroundWarningBoldPressed: Colors.Yellow[200],
  colorBackgroundSuccess: Colors.Green[100],
  colorBackgroundSuccessHovered: Colors.Green[200],
  colorBackgroundSuccessPressed: Colors.Green[300],
  colorBackgroundSuccessBold: Colors.Green[700],
  colorBackgroundSuccessBoldHovered: Colors.Green[800],
  colorBackgroundSuccessBoldPressed: Colors.Green[900],

  colorBackgroundDiscovery: Colors.Purple[100],
  colorBackgroundDiscoveryHovered: Colors.Purple[200],
  colorBackgroundDiscoveryPressed: Colors.Purple[300],
  colorBackgroundDiscoveryBold: Colors.Purple[700],
  colorBackgroundDiscoveryBoldHovered: Colors.Purple[800],
  colorBackgroundDiscoveryBoldPressed: Colors.Purple[900],

  colorBackgroundInformation: Colors.Blue[100],
  colorBackgroundInformationHovered: Colors.Blue[200],
  colorBackgroundInformationPressed: Colors.Blue[300],
  colorBackgroundInformationBold: Colors.Blue[700],
  colorBackgroundInformationBoldHovered: Colors.Blue[800],
  colorBackgroundInformationBoldPressed: Colors.Blue[900],

  colorBackgroundAlternativeBrand: Colors.Blue[700],
  colorBackgroundAlternativeSubtle: Colors.Neutral[200],
  colorBackgroundAlternativeTextInputBox: Colors.Unlisted.GreenBackground,
  colorBackgroundAlternativeTextInput: Colors.Unlisted.BackgroundAlpha,
  colorBackgroundAlternativeCardBg: Colors.Unlisted.AiChatBubbleBg,
  colorBackgroundAlternativeCardBg2: Colors.Unlisted.UserChatBubbleBg,

  colorBlanket: Colors.Neutral[500],
  colorBlanketSelected: "#388BF4",
  colorBlanketDanger: "#EFC4B1",
  colorInteractionHovered: "#00000029",
  colorInteractionPressed: "#00000052",
  colorSkeleton: Colors.Neutral[200],
  colorSkeletonSubtle: Colors.Neutral[100],
  elevationSurface: Colors.Neutral[0],
  elevationSurfaceHovered: Colors.Neutral[200],
  elevationSurfacePressed: Colors.Neutral[300],
  elevationSurfaceOverlay: Colors.Neutral[200],
  elevationSurfaceOverlayHovered: Colors.Neutral[300],
  elevationSurfaceOverlayPressed: Colors.Neutral[400],
  elevationSurfaceRaised: Colors.Neutral[0],
  elevationSurfaceRaisedHovered: Colors.Neutral[300],
  elevationSurfaceRaisedPressed: Colors.Neutral[300],
  elevationSurfaceSunken: Colors.Neutral[100],

  elevationSurfaceAlternative: Colors.LightNeutralAlternative.neutral,

  elevationShadowOverflow: "rgba(9, 30, 66, 0.15)",
  elevationShadowOverflowPerimeter: "rgba(9, 30, 66, 0.31)",
  elevationShadowOverflowSpread: "rgba(9, 30, 66, 0.31)",
  elevationShadowOverlay: "0px 8px 12px rgba(9, 30, 66, 0.15)",
  elevationShadowRaised: "0px 8px 12px rgba(9, 30, 66, 0.15)",
};

const colorTokensDark = {
  colorTextDefault: Colors.DarkNeutral[900],
  colorTextSubtle: Colors.DarkNeutral[800],
  colorTextSubtlest: Colors.DarkNeutral[700],
  colorTextInverse: Colors.DarkNeutral[100],
  colorTextDisabled: Colors.DarkNeutralAlpha[400],
  colorTextSelected: Colors.Blue[400],
  colorTextBrand: Colors.Blue[400],
  colorTextDanger: Colors.Red[300],
  colorTextWarning: Colors.Yellow[300],
  colorTextWarningInverse: Colors.Yellow[300],
  colorTextSuccess: Colors.Green[300],
  colorTextDiscovery: Colors.Purple[300],
  colorTextInformation: Colors.Blue[300],
  colorTextAccent: Colors.Blue[400],
  colorTextAccentRead: Colors.Red[300],
  colorTextAccentRedBolder: Colors.Red[200],
  colorTextAccentOrange: Colors.Orange[800],
  colorTextAccentOrangeBolder: Colors.Orange[300],
  colorTextAccentYellow: Colors.Yellow[800],
  colorTextAccentYellowBolder: Colors.Yellow[300],
  colorTextAccentLime: Colors.Lime[600],
  colorTextAccentLimeBolder: Colors.Lime[300],
  colorTextAccentGreen: Colors.Green[600],
  colorTextAccentGreenBolder: Colors.Green[300],
  colorTextAccentTeal: Colors.Teal[800],
  colorTextAccentTealBolder: Colors.Teal[300],
  colorTextAccentBlue: Colors.Blue[800],
  colorTextAccentBlueBolder: Colors.Blue[300],
  colorTextAccentPurple: Colors.Purple[900],
  colorTextAccentPurpleBolder: Colors.Purple[300],
  colorTextAccentMagenta: Colors.Magenta[800],
  colorTextAccentMagentaBolder: Colors.Magenta[300],
  colorTextAccentGray: Colors.Neutral[800],
  colorTextAccentGrayBolder: Colors.Neutral[1100],
  colorTextAlternative: Colors.Neutral[0],
  colorTextAlternativeSubtle: Colors.Neutral[200],
  colorTextAlternativeSubtlest: Colors.Neutral[400],

  // Token per i link
  colorTextLink: Colors.Blue[700],
  colorTextLinkPressed: Colors.Blue[800],

  // Token per le icone
  colorIcon: Colors.Neutral[800],
  colorIconSubtle: Colors.Neutral[700],
  colorIconInverse: Colors.Neutral[0],
  colorIconDisabled: Colors.DarkNeutralAlpha[400],
  colorIconSelected: Colors.Blue[700],
  colorIconBrand: Colors.Brand[400],
  colorIconDanger: Colors.Red[500],
  colorIconWarning: Colors.Yellow[500],
  colorIconSuccess: Colors.Green[500],
  colorIconDiscovery: Colors.Purple[500],
  colorIconInformation: Colors.Blue[500],
  colorIconAccentRed: Colors.Red[500],
  colorIconAccentOrange: Colors.Orange[500],
  colorIconAccentYellow: Colors.Yellow[500],
  colorIconAccentLime: Colors.Lime[500],
  colorIconAccentGreen: Colors.Green[500],
  colorIconAccentTeal: Colors.Teal[500],
  colorIconAccentBlue: Colors.Blue[500],
  colorIconAccentPurple: Colors.Purple[500],
  colorIconAccentMagenta: Colors.Magenta[500],
  colorIconAccentGray: Colors.DarkNeutral[600],

  // Token per i bordi
  colorBorder: Colors.DarkNeutral[300],
  colorBorderBold: Colors.DarkNeutral[800],
  colorBorderInverse: Colors.DarkNeutral[0],
  colorBorderDisabled: Colors.DarkNeutral[200],
  colorBorderFocused: Colors.Blue[300],
  colorBorderSelected: Colors.Blue[400],
  colorBorderInput: Colors.DarkNeutral[300],
  colorBorderBrand: Colors.Blue[400],
  colorBorderDanger: Colors.Red[500],
  colorBorderWarning: Colors.Orange[500],
  colorBorderSuccess: Colors.Green[500],
  colorBorderDiscovery: Colors.Purple[500],
  colorBorderInformation: Colors.Blue[500],
  colorBorderAccentRed: Colors.Red[500],
  colorBorderAccentOrange: Colors.Orange[500],
  colorBorderAccentYellow: Colors.Yellow[500],
  colorBorderAccentLime: Colors.Lime[500],
  colorBorderAccentGreen: Colors.Green[500],
  colorBorderAccentGrayBolder: Colors.DarkNeutral[500],
  colorBorderAccentTeal: Colors.Teal[500],
  colorBorderAccentBlue: Colors.Blue[500],
  colorBorderAccentPurple: Colors.Purple[500],
  colorBorderAccentMagenta: Colors.Magenta[500],
  colorBorderAccentGray: Colors.DarkNeutral[600],
  colorBackgroundAccentRedSubtlest: Colors.Red[1000],
  colorBackgroundAccentRedSubtler: Colors.Red[900],
  colorBackgroundAccentRedSubtle: Colors.Red[800],
  colorBackgroundAccentRedBolder: Colors.Red[400],
  colorBackgroundAccentOrangeSubtlest: Colors.Orange[1000],
  colorBackgroundAccentOrangeSubtler: Colors.Orange[900],
  colorBackgroundAccentOrangeSubtle: Colors.Orange[800],
  colorBackgroundAccentOrangeBolder: Colors.Orange[400],
  colorBackgroundAccentYellowSubtlest: Colors.Yellow[1000],
  colorBackgroundAccentYellowSubtler: Colors.Yellow[900],
  colorBackgroundAccentYellowSubtle: Colors.Yellow[800],
  colorBackgroundAccentYellowBolder: Colors.Yellow[400],
  colorBackgroundAccentLimeSubtlest: Colors.Lime[1000],
  colorBackgroundAccentLimeSubtler: Colors.Lime[900],
  colorBackgroundAccentLimeSubtle: Colors.Lime[800],
  colorBackgroundAccentLimeBolder: Colors.Lime[400],
  colorBackgroundAccentGreenSubtlest: Colors.Green[1000],
  colorBackgroundAccentGreenSubtler: Colors.Green[900],
  colorBackgroundAccentGreenSubtle: Colors.Green[800],
  colorBackgroundAccentGreenBolder: Colors.Green[400],
  colorBackgroundAccentTealSubtlest: Colors.Teal[1000],
  colorBackgroundAccentTealSubtler: Colors.Teal[900],
  colorBackgroundAccentTealSubtle: Colors.Teal[800],
  colorBackgroundAccentTealBolder: Colors.Teal[400],
  colorBackgroundAccentBlueSubtlest: Colors.Blue[1000],
  colorBackgroundAccentBlueSubtler: Colors.Blue[900],
  colorBackgroundAccentBlueSubtle: Colors.Blue[800],
  colorBackgroundAccentBlueBolder: Colors.Blue[400],
  colorBackgroundAccentPurpleSubtlest: Colors.Purple[1000],
  colorBackgroundAccentPurpleSubtler: Colors.Purple[900],
  colorBackgroundAccentPurpleSubtle: Colors.Purple[800],
  colorBackgroundAccentPurpleBolder: Colors.Purple[400],
  colorBackgroundAccentMagentaSubtlest: Colors.Magenta[1000],
  colorBackgroundAccentMagentaSubtler: Colors.Magenta[900],
  colorBackgroundAccentMagentaSubtle: Colors.Magenta[800],
  colorBackgroundAccentMagentaBolder: Colors.Magenta[400],
  colorBackgroundAccentGraySubtlest: Colors.DarkNeutral[300],
  colorBackgroundAccentGraySubtler: Colors.DarkNeutral[400],
  colorBackgroundAccentGraySubtle: Colors.DarkNeutral[500],
  colorBackgroundAccentGrayBolder: Colors.DarkNeutral[700],
  colorBackgroundDisabled: Colors.DarkNeutral[1000],
  colorBackgroundInput: Colors.DarkNeutral[200],
  colorBackgroundInputHovered: Colors.DarkNeutral[250],
  colorBackgroundInputPressed: Colors.DarkNeutral[200],
  colorBackgroundInverseSubtle: "#FFFFFF29",
  colorBackgroundInverseSubtleHovered: "#FFFFFF3D",
  colorBackgroundInverseSubtlePressed: "#FFFFFF52",
  colorBackgroundNeutralSubtle: "Transparent",
  colorBackgroundNeutralSubtleHovered: Colors.DarkNeutral[200],
  colorBackgroundNeutralSubtlePressed: Colors.DarkNeutral[300],
  colorBackgroundNeutral: Colors.DarkNeutralAlpha[200],
  colorBackgroundNeutralHovered: Colors.DarkNeutral[300],
  colorBackgroundNeutralPressed: Colors.DarkNeutral[400],
  colorBackgroundNeutralBold: Colors.DarkNeutral[800],
  colorBackgroundNeutralBoldHovered: Colors.DarkNeutral[900],
  colorBackgroundNeutralBoldPressed: Colors.DarkNeutral[800],
  colorBackgroundSelected: Colors.Blue[1000],
  colorBackgroundSelectedHovered: Colors.Blue[900],
  colorBackgroundSelectedPressed: Colors.Blue[800],
  colorBackgroundSelectedBold: Colors.Blue[400],
  colorBackgroundSelectedBoldHovered: Colors.Blue[300],
  colorBackgroundSelectedBoldPressed: Colors.Blue[200],

  colorBackgroundBrandSubtlest: Colors.Blue[1000],
  colorBackgroundBrandBold: Colors.Blue[400],
  colorBackgroundBrandBoldest: Colors.Blue[100],

  colorBackgroundDanger: Colors.Red[1000],
  colorBackgroundDangerHovered: Colors.Red[900],
  colorBackgroundDangerPressed: Colors.Red[800],
  colorBackgroundDangerBold: Colors.Red[400],
  colorBackgroundDangerBoldHovered: Colors.Red[300],
  colorBackgroundDangerBoldPressed: Colors.Red[200],

  colorBackgroundWarning: Colors.Yellow[1000],
  colorBackgroundWarningHovered: Colors.Yellow[900],
  colorBackgroundWarningPressed: Colors.Yellow[800],
  colorBackgroundWarningBold: Colors.Yellow[500],
  colorBackgroundWarningBoldHovered: Colors.Yellow[600],
  colorBackgroundWarningBoldPressed: Colors.Yellow[200],
  colorBackgroundSuccess: Colors.Green[1000],
  colorBackgroundSuccessHovered: Colors.Green[900],
  colorBackgroundSuccessPressed: Colors.Green[800],
  colorBackgroundSuccessBold: Colors.Green[400],
  colorBackgroundSuccessBoldHovered: Colors.Green[300],
  colorBackgroundSuccessBoldPressed: Colors.Green[200],

  colorBackgroundDiscovery: Colors.Purple[1000],
  colorBackgroundDiscoveryHovered: Colors.Purple[900],
  colorBackgroundDiscoveryPressed: Colors.Purple[800],
  colorBackgroundDiscoveryBold: Colors.Purple[400],
  colorBackgroundDiscoveryBoldHovered: Colors.Purple[300],
  colorBackgroundDiscoveryBoldPressed: Colors.Purple[200],

  colorBackgroundInformation: Colors.Blue[1000],
  colorBackgroundInformationHovered: Colors.Blue[900],
  colorBackgroundInformationPressed: Colors.Blue[800],
  colorBackgroundInformationBold: Colors.Blue[400],
  colorBackgroundInformationBoldHovered: Colors.Blue[300],
  colorBackgroundInformationBoldPressed: Colors.Blue[200],

  colorBackgroundAlternativeBrand: Colors.Blue[700],
  colorBackgroundAlternativeSubtle: Colors.Neutral[200],
  colorBackgroundAlternativeTextInputBox: Colors.Unlisted.GreenBackground,
  colorBackgroundAlternativeTextInput: Colors.Unlisted.BackgroundAlpha,

  colorBlanket: "#10121499",
  colorBlanketSelected: "#101214C1",
  colorBlanketDanger: "#341515C1",
  colorInteractionHovered: "#FFFFFF29",
  colorInteractionPressed: "#FFFFFF52",
  colorSkeleton: Colors.DarkNeutral[200],
  colorSkeletonSubtle: Colors.DarkNeutral[100],
  elevationSurface: Colors.DarkNeutral[100],
  elevationSurfaceHovered: Colors.DarkNeutral[200],
  elevationSurfacePressed: Colors.DarkNeutral[250],
  elevationSurfaceOverlay: Colors.DarkNeutral[200],
  elevationSurfaceOverlayHovered: Colors.DarkNeutral[300],
  elevationSurfaceOverlayPressed: Colors.DarkNeutral[350],
  elevationSurfaceRaised: Colors.DarkNeutral[200],
  elevationSurfaceRaisedHovered: Colors.DarkNeutral[250],
  elevationSurfaceRaisedPressed: Colors.DarkNeutral[300],
  elevationSurfaceSunken: Colors.DarkNeutral[100],

  elevationSurfaceAlternative: Colors.DarkNeutralAlternative.neutral,

  elevationShadowOverflow: "rgba(0, 0, 0, 0.36)",
  elevationShadowOverflowPerimeter: "rgba(0, 0, 0, 0.5)",
  elevationShadowOverflowSpread: "rgba(0, 0, 0, 0.5)",
  elevationShadowOverlay: "0px 8px 12px rgba(0, 0, 0, 0.36)",
  elevationShadowRaised: "0px 8px 12px rgba(0, 0, 0, 0.36)",
};

export const subscription = Appearance.addChangeListener(({ colorScheme }) => {
  colorTokens = colorScheme === 'light' ? colorTokensLight : colorTokensDark;
});


export let colorTokens : any = colorTokensLight;
