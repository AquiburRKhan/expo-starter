import { useState } from "react";
import { useTheme } from "@shopify/restyle";
import { View, StyleSheet, Pressable } from "react-native";
import { Theme } from "@/theme";
import { ThemeModal } from "@/components/settings/theme/ThemeModal";
import { useGlobalStore } from "@/stores/settingsStore";
import { AppTitle } from "@/components/shared/AppTitle";
import { AppText } from "@/components/shared/AppText";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSelector } from "@/components/settings/language/LanguageSelector";

const Settings = () => {
  const theme = useTheme<Theme>();
  const { t } = useLanguage();
  const styles = SettingsStyles(theme);

  const selectedTheme = useGlobalStore((state) => state.settings.theme);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);

  const toggleThemeModal = () => {
    setIsThemeModalOpen(!isThemeModalOpen);
  };

  return (
    <View style={styles.settingsContainer}>
      <AppTitle style={styles.settingsTitle}>
        {t("settings.displayOptions")}
      </AppTitle>
      {/* Display Options */}

      {/* Theme Selector */}
      <Pressable
        style={styles.settingOption}
        android_ripple={{
          color: theme.colors.primaryButtonRipple,
        }}
        onPress={toggleThemeModal}
      >
        <AppText style={styles.settingOptionText}>
          {t("settings.theme")}
        </AppText>
        <AppText style={styles.settingOptionText}>
          {t(`settings.${selectedTheme}`)}
        </AppText>
      </Pressable>
      {/* Theme Selector */}

      {/* Language Selector */}
      <LanguageSelector styles={styles} />
      {/* Language Selector */}

      {/* Display Options */}
      <ThemeModal
        isModalVisible={isThemeModalOpen}
        toggleModal={toggleThemeModal}
      />
    </View>
  );
};

const SettingsStyles = (theme: Theme) =>
  StyleSheet.create({
    settingsContainer: {
      flex: 1,
      paddingHorizontal: theme.spacing.xm,
      paddingTop: theme.spacing.l,
      backgroundColor: theme.colors.primaryBackground,
    },
    settingsTitle: {
      fontSize: theme.fontSize.xl,
      color: theme.colors.primaryText,
      marginBottom: theme.spacing.l,
    },
    settingOption: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: theme.spacing.m,
      marginBottom: theme.spacing.m,
      alignItems: "center",
    },
    settingOptionText: {
      fontSize: theme.fontSize.m,
      color: theme.colors.primaryText,
    },
    toggleOptionText: {
      fontSize: theme.fontSize.m,
      color: theme.colors.toggleTitleColor,
    },
  });

export default Settings;
