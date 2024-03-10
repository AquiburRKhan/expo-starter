import { Theme } from "@/theme";
import { useTheme } from "@shopify/restyle";
import { Text, StyleSheet, TextProps } from "react-native";

export const AppText = ({ style, children, ...rest }: TextProps) => {
  const theme = useTheme<Theme>();
  const styles = AppTextStyles(theme);

  return (
    <Text {...rest} style={[styles.AppText, style]}>
      {children}
    </Text>
  );
};

const AppTextStyles = (theme: Theme) =>
  StyleSheet.create({
    AppText: {
      fontFamily: theme.textFontFamily,
      color: theme.colors.primaryText,
    },
  });
