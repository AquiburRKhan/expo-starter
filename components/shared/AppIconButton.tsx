import { Theme } from "@/theme";
import { useTheme } from "@shopify/restyle";
import { StyleSheet, Pressable, PressableProps, ViewStyle } from "react-native";

export const AppIconButton = ({ style, children, ...rest }: PressableProps) => {
  const theme = useTheme<Theme>();
  const styles = AppIconButtonStyles(theme);

  return (
    <Pressable
      {...rest}
      hitSlop={10}
      style={[styles.appIconButton, style] as ViewStyle}
    >
      {children}
    </Pressable>
  );
};

const AppIconButtonStyles = (theme: Theme) =>
  StyleSheet.create({
    appIconButton: {
      padding: theme.spacing.s,
      borderRadius: theme.borderRadius.m,
      backgroundColor: theme.colors.primaryButtonBackground,
    },
  });
