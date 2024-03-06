import { AppText } from "@/components/shared/AppText";
import { useEffect, useState } from "react";
import { View } from "react-native";
import Toggle from "react-native-toggle-element";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";
import { useGlobalStore } from "@/stores/settingsStore";
import { useLanguage } from "@/hooks/useLanguage";

type LanguageSelectorProps = {
  styles: any;
};

export const LanguageSelector = ({ styles }: LanguageSelectorProps) => {
  const theme = useTheme<Theme>();
  const { setLanguageToBanglaInApp, setLanguageToEnglishInApp, t } =
    useLanguage();
  const selectedLanguageCode = useGlobalStore(
    (state) => state.settings.languageCode
  );
  const [toggleLanguage, setToggleLanguage] = useState(
    selectedLanguageCode === "bn"
  );

  const toggleLanguageHandler = () => {
    setToggleLanguage(!toggleLanguage);
  };

  useEffect(() => {
    if (toggleLanguage) {
      setLanguageToBanglaInApp();
    } else {
      setLanguageToEnglishInApp();
    }
  }, [toggleLanguage]);

  return (
    <View style={styles.settingOption}>
      <AppText style={styles.settingOptionText}>
        {t("settings.language")}
      </AppText>
      <Toggle
        value={toggleLanguage}
        onPress={toggleLanguageHandler}
        leftComponent={
          <AppText style={styles.toggleOptionText}>{t("settings.en")}</AppText>
        }
        rightComponent={
          <AppText style={styles.toggleOptionText}>{t("settings.bn")}</AppText>
        }
        thumbStyle={{
          backgroundColor: theme.colors.toggleThumbColor,
        }}
        thumbButton={{
          height: 35,
          width: 35,
        }}
        trackBar={{
          height: 30,
          width: 80,
          radius: 80,
          activeBackgroundColor: theme.colors.toggleTrackColor,
          inActiveBackgroundColor: theme.colors.toggleTrackColor,
        }}
      />
    </View>
  );
};
