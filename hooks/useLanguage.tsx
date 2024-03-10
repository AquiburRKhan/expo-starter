import { I18n } from "i18n-js";
import { banglaTranslations, englishTranslations } from "@/localization";
import { useGlobalStore } from "@/stores/zustandStore";
import { useEffect, useMemo } from "react";

const translations = { ...englishTranslations, ...banglaTranslations };
const i18n = new I18n(translations);
i18n.enableFallback = true;
const t = i18n.t.bind(i18n);

export const useLanguage = () => {
  const selectedLanguageCode = useGlobalStore(
    (state) => state.settings.languageCode
  );
  const setLanguageToBanglaInStore = useGlobalStore(
    (state) => state.setLanguageToBanglaInStore
  );
  const setLanguageToEnglishInStore = useGlobalStore(
    (state) => state.setLanguageToEnglishInStore
  );

  const setLanguageToBanglaInApp = () => {
    setLanguageToBanglaInStore();
    i18n.locale = "bn";
  };

  const setLanguageToEnglishInApp = () => {
    setLanguageToEnglishInStore();
    i18n.locale = "en";
  };

  const setInitialLocale = () => {
    if (selectedLanguageCode === "bn") {
      i18n.locale = "bn";
    } else {
      i18n.locale = "en";
    }
  };

  return {
    setInitialLocale,
    setLanguageToBanglaInApp,
    setLanguageToEnglishInApp,
    t,
  };
};
