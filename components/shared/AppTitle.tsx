import { Theme } from "@/theme";
import { useTheme } from "@shopify/restyle";
import { Text, StyleSheet, TextProps } from "react-native";

export const AppTitle = ({ style, children, ...rest }: TextProps) => {
  const theme = useTheme<Theme>();
  const styles = AppTitleStyles(theme);

  return (
    <Text {...rest} style={[styles.appTitle, style]}>
      {children}
    </Text>
  );
};

const AppTitleStyles = (theme: Theme) =>
  StyleSheet.create({
    appTitle: {
      fontFamily: theme.titleFontFamily,
    },
  });
