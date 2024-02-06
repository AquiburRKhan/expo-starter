import { createTheme } from "@shopify/restyle";

const palette = {
  aqua: "#E0F4FF",
  lightBlue: "#87C4FF",
  blue: "#39A7FF",
  beige: "#FFEED9",
  black: "#0B0B0B",
  white: "#F0F2F3",
};

const defaultTheme = createTheme({
  colors: {
    primary: palette.blue,
    secondary: palette.lightBlue,
    tertiary: palette.aqua,
    background: palette.white,
    info: palette.beige,
    textPrimary: palette.black,
    textSecondary: palette.white,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
  },
  // textVariants: {
  //   header: {
  //     fontWeight: "bold",
  //     fontSize: 34,
  //   },
  //   body: {
  //     fontSize: 16,
  //     lineHeight: 24,
  //   },
  //   defaults: {
  //     // We can define a default text variant here.
  //   },
  // },
});

export type Theme = typeof defaultTheme;
export default defaultTheme;
