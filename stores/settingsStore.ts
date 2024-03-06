import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { mmkvStorage } from "./persistStorage/mmkvStorage";

export interface GlobalStoreState {
  settings: {
    languageCode: "en" | "bn";
    theme: "light" | "dark" | "system";
  };
  enableDarkMode: () => void;
  enableLightMode: () => void;
  enableSystemMode: () => void;
  setLanguageToBanglaInStore: () => void;
  setLanguageToEnglishInStore: () => void;
}

const useGlobalStore = create<GlobalStoreState>(
  // @ts-ignore
  persist(
    (set, get) => ({
      settings: {
        languageCode: "bn",
        theme: "system",
      },
      enableDarkMode: () =>
        set(() => ({
          settings: { ...get().settings, theme: "dark" },
        })),
      enableLightMode: () =>
        set(() => ({
          settings: { ...get().settings, theme: "light" },
        })),
      enableSystemMode: () =>
        set(() => ({
          settings: {
            ...get().settings,
            theme: "system",
          },
        })),
      setLanguageToBanglaInStore: () =>
        set(() => ({
          settings: { ...get().settings, languageCode: "bn" },
        })),
      setLanguageToEnglishInStore: () =>
        set(() => ({
          settings: { ...get().settings, languageCode: "en" },
        })),
    }),
    {
      name: "task-tracker-v8",
      storage: createJSONStorage(() => mmkvStorage),
    }
  )
);

export { useGlobalStore };
