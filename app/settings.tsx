import { useState } from "react";
import { useTheme } from "@shopify/restyle";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { Theme } from "@/theme";
import { ThemeModal } from "@/components/settings/ThemeModal";
import { useGlobalStore } from "@/stores/settingsStore";
import { AppTitle } from "@/components/shared/AppTitle";
import { AppText } from "@/components/shared/AppText";

const Settings = () => {
  const theme = useTheme<Theme>();
  const styles = SettingsStyles(theme);

  const themeLabel = useGlobalStore((state) => state.settings.themeLabel);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);

  const toggleThemeModal = () => {
    setIsThemeModalOpen(!isThemeModalOpen);
  };

  return (
    <View style={styles.settingsContainer}>
      <AppTitle style={styles.settingsTitle}>Display options</AppTitle>
      <Pressable
        style={styles.themeOption}
        android_ripple={{
          color: theme.colors.primaryButtonRipple,
        }}
        onPress={toggleThemeModal}
      >
        <AppText style={styles.themeOptionText}>Theme</AppText>
        <AppText style={styles.themeOptionText}>{themeLabel}</AppText>
      </Pressable>
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
    themeOption: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: theme.spacing.m,
    },
    themeOptionText: {
      fontSize: theme.fontSize.m,
      color: theme.colors.primaryText,
    },
  });

export default Settings;
