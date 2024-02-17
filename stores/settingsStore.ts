import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { mmkvStorage } from "./persistStorage/mmkvStorage";

export interface GlobalStoreState {
  settings: {
    theme: "light" | "dark" | "system";
    themeLabel: "Light" | "Dark" | "System default";
  };
  enableDarkMode: () => void;
  enableLightMode: () => void;
  enableSystemMode: () => void;
}

const useGlobalStore = create<GlobalStoreState>(
  // @ts-ignore
  persist(
    (set, get) => ({
      settings: {
        theme: "system",
        themeLabel: "System default",
      },
      enableDarkMode: () =>
        set(() => ({
          settings: { ...get().settings, theme: "dark", themeLabel: "Dark" },
        })),
      enableLightMode: () =>
        set(() => ({
          settings: { ...get().settings, theme: "light", themeLabel: "Light" },
        })),
      enableSystemMode: () =>
        set(() => ({
          settings: {
            ...get().settings,
            theme: "system",
            themeLabel: "System default",
          },
        })),
    }),
    {
      name: "task-tracker-v1",
      storage: createJSONStorage(() => mmkvStorage),
    }
  )
);

export { useGlobalStore };
