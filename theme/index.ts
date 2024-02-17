import { createTheme } from "@shopify/restyle";

const palette = {
  whiteLinen: "#f8f4ea",
  ebony: "#30323a",
  astorathRed: "#da432b",
  black: "#0B0B0B",
  white: "#F0F2F3",
};

const colors = {
  primary: palette.whiteLinen,
  secondary: palette.ebony,
  tertiary: palette.astorathRed,
  white: palette.white,
  black: palette.black,
};

const darkColors = {
  primary: palette.ebony,
  secondary: palette.whiteLinen,
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
    m: 12,
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
    // drawer
    drawerActiveTintColor: colors.primary,
    drawerActiveBackgroundColor: colors.tertiary,
    drawerInactiveTintColor: colors.secondary,
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
    primaryButtonBackground: darkColors.tertiary,
    // drawer
    drawerActiveTintColor: colors.primary,
    drawerActiveBackgroundColor: colors.tertiary,
    drawerInactiveTintColor: colors.primary,
  },
  ...commonThemeProps,
});

export type Theme = typeof lightTheme;
export { lightTheme, darkTheme };
