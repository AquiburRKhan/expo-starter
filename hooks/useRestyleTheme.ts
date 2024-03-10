import { useGlobalStore } from "@/stores/zustandStore";
import { useColorScheme } from "react-native";
import { lightTheme, darkTheme, Theme } from "@/theme";
import { useEffect, useState, useCallback } from "react";
import { setStatusBarStyle } from "expo-status-bar";
import * as SystemUI from "expo-system-ui";

export const useRestyleTheme = () => {
  const [restyleTheme, setRestyleTheme] = useState<Theme>(lightTheme);
  const selectedTheme = useGlobalStore((state) => state.settings.theme);
  const colorScheme = useColorScheme();

  const implementLightTheme = useCallback(() => {
    setRestyleTheme(lightTheme);
    SystemUI.setBackgroundColorAsync(lightTheme.colors.primaryBackground);
    /* Change status bar color opposite to theme selection */
    setStatusBarStyle("dark");
  }, []);

  const implementDarkTheme = useCallback(() => {
    setRestyleTheme(darkTheme);
    SystemUI.setBackgroundColorAsync(darkTheme.colors.primaryBackground);
    /* Change status bar color opposite to theme selection */
    setStatusBarStyle("light");
  }, []);

  useEffect(() => {
    if (selectedTheme === "light") {
      implementLightTheme();
    } else if (selectedTheme === "dark") {
      implementDarkTheme();
    } else if (selectedTheme === "system") {
      if (colorScheme === "dark") {
        implementDarkTheme();
      } else {
        implementLightTheme();
      }
    }
  }, [selectedTheme]);

  useEffect(() => {
    if (selectedTheme !== "system") return;

    if (colorScheme === "dark") {
      implementDarkTheme();
    } else {
      implementLightTheme();
    }
  }, [colorScheme]);

  return [restyleTheme];
};
