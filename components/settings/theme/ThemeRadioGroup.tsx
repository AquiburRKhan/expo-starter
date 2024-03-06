import { RadioButtonProps, RadioGroup } from "react-native-radio-buttons-group";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";
import { StyleSheet } from "react-native";
import { useEffect, useMemo, useState } from "react";
import { useGlobalStore } from "@/stores/settingsStore";
import { useLanguage } from "@/hooks/useLanguage";

export const ThemeRadioGroup = () => {
  const theme = useTheme<Theme>();
  const styles = ThemeRadioGroupStyles(theme);
  const selectedTheme = useGlobalStore((state) => state.settings.theme);
  const [selectedThemeId, setSelectedThemeId] = useState<string | undefined>(
    selectedTheme
  );
  const enableDarkMode = useGlobalStore((state) => state.enableDarkMode);
  const enableLightMode = useGlobalStore((state) => state.enableLightMode);
  const enableSystemMode = useGlobalStore((state) => state.enableSystemMode);
  const { t } = useLanguage();

  useEffect(() => {
    if (selectedThemeId === "dark") {
      enableDarkMode();
    } else if (selectedThemeId === "light") {
      enableLightMode();
    } else if (selectedThemeId === "system") {
      enableSystemMode();
    }
  }, [selectedThemeId]);

  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: "light", // acts as primary key, should be unique and non-empty string
        label: t("settings.light"),
        selected: selectedTheme === "light",
        containerStyle: styles.radioButton,
      },
      {
        id: "dark",
        label: t("settings.dark"),
        selected: selectedTheme === "dark",
        containerStyle: styles.radioButton,
      },
      {
        id: "system",
        label: t("settings.system"),
        selected: selectedTheme === "system",
        containerStyle: styles.radioButton,
      },
    ],
    [selectedTheme]
  );

  return (
    <RadioGroup
      containerStyle={styles.radioGroupContainer}
      labelStyle={styles.radioLabel}
      radioButtons={radioButtons}
      onPress={setSelectedThemeId}
      selectedId={selectedThemeId}
    />
  );
};

const ThemeRadioGroupStyles = (theme: Theme) =>
  StyleSheet.create({
    radioGroupContainer: {
      alignItems: "flex-start",
    },
    radioButton: {
      paddingVertical: theme.spacing.s,
      marginVertical: 0,
      width: "100%",
    },
    radioLabel: {
      fontFamily: theme.textFontFamily,
      fontSize: theme.fontSize.m,
      color: theme.colors.primaryText,
    },
  });
