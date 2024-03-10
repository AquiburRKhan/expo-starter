import { Theme } from "@/theme";
import { useTheme } from "@shopify/restyle";
import {
  StyleSheet,
  Pressable,
  PressableProps,
  ViewStyle,
  Text,
  TextProps,
  TextStyle,
} from "react-native";

type AppButtonProps = PressableProps &
  TextProps & {
    textStyle?: TextStyle;
  };

export const AppButton = ({
  style,
  textStyle,
  children,
  disabled,
  ...rest
}: AppButtonProps) => {
  const theme = useTheme<Theme>();
  const styles = AppButtonStyles(theme);

  const pressableStyle = {
    ...styles.appButton,
    ...(disabled && styles.disabledAppButton),
    ...(style as ViewStyle),
  };

  return (
    <Pressable disabled={disabled} style={pressableStyle} {...rest}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </Pressable>
  );
};

const AppButtonStyles = (theme: Theme) =>
  StyleSheet.create({
    appButton: {
      padding: theme.spacing.m,
      borderRadius: theme.borderRadius.m,
      backgroundColor: theme.colors.primaryButtonBackground,
    },
    disabledAppButton: {
      opacity: 0.5,
    },
    text: {
      fontFamily: theme.buttonFontFamily,
      color: theme.colors.primaryButtonText,
    },
  });
