import { createTheme } from "@shopify/restyle";

const palette = {
  nude: "#ffefd5",
  ebony: "#30323a",
  astorathRed: "#da432b",
  black: "#0B0B0B",
  white: "#F0F2F3",
};

const colors = {
  primary: palette.nude,
  secondary: palette.ebony,
  tertiary: palette.astorathRed,
  white: palette.white,
  black: palette.black,
};

const darkColors = {
  primary: palette.ebony,
  secondary: palette.nude,
  tertiary: palette.astorathRed,
  white: palette.white,
  black: palette.black,
};

const commonThemeProps = {
  spacing: {
    xs: 8,
    s: 10,
    m: 12,
    xm: 16,
    l: 20,
    xl: 24,
    xxl: 32,
  },
  fontSize: {
    xs: 12,
    s: 14,
    m: 16,
    ml: 18,
    l: 20,
    xl: 24,
    xxl: 32,
  },
  borderRadius: {
    xs: 4,
    s: 8,
    m: 10,
    ml: 12,
    l: 16,
    xl: 24,
  },
  fontFamily: {
    PoppinsBold: "PoppinsBold",
    PoppinsSemiBold: "PoppinsSemiBold",
    PoppinsMedium: "PoppinsMedium",
    PoppinsRegular: "PoppinsRegular",
    PoppinsLight: "PoppinsLight",
    RobotoBold: "RobotoBold",
    RobotoMedium: "RobotoMedium",
    RobotoRegular: "RobotoRegular",
    RobotoLight: "RobotoLight",
  },
  navigationFontFamily: "RobotoMedium",
  titleFontFamily: "RobotoRegular",
  textFontFamily: "PoppinsRegular",
  buttonFontFamily: "PoppinsBold",
  taskTitleFontFamily: "PoppinsMedium",
  iconButtonSize: 30,
};

const lightTheme = createTheme({
  colors: {
    // header
    primaryHeaderBackground: colors.primary,
    primaryHeaderText: colors.tertiary,
    // app background
    primaryBackground: colors.primary,
    // title
    primaryTitle: colors.tertiary,
    // text
    primaryText: colors.secondary,
    // button
    primaryButtonRipple: colors.primary,
    primaryButtonBackground: colors.tertiary,
    primaryButtonIcon: colors.primary,
    primaryButtonText: darkColors.secondary,
    // drawer
    drawerActiveTintColor: colors.primary,
    drawerActiveBackgroundColor: colors.tertiary,
    drawerInactiveTintColor: colors.secondary,
    // toggle
    toggleTrackColor: colors.secondary,
    toggleThumbColor: colors.tertiary,
    toggleTitleColor: colors.primary,
    // text input styling
    textInputBorder: colors.tertiary,
    // task box
    taskBoxBorder: colors.tertiary,
  },
  ...commonThemeProps,
});

const darkTheme = createTheme({
  colors: {
    // header
    primaryHeaderBackground: darkColors.tertiary,
    primaryHeaderText: darkColors.secondary,
    // app background
    primaryBackground: darkColors.primary,
    // title
    primaryTitle: darkColors.tertiary,
    // text
    primaryText: darkColors.secondary,
    // button
    primaryButtonRipple: colors.primary,
    primaryButtonBackground: darkColors.secondary,
    primaryButtonIcon: colors.tertiary,
    primaryButtonText: darkColors.tertiary,
    // drawer
    drawerActiveTintColor: colors.primary,
    drawerActiveBackgroundColor: colors.tertiary,
    drawerInactiveTintColor: colors.primary,
    // toggle
    toggleTrackColor: darkColors.secondary,
    toggleThumbColor: darkColors.tertiary,
    toggleTitleColor: darkColors.primary,
    // text input styling
    textInputBorder: colors.tertiary,
    // task box
    taskBoxBorder: colors.tertiary,
  },
  ...commonThemeProps,
});

export type Theme = typeof lightTheme;
export { lightTheme, darkTheme };
