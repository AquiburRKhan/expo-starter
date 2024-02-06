import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { mmkvStorage } from "./persistStorage/mmkvStorage";

export interface GlobalStoreState {
  isDarkMode: boolean | undefined;
  user: { name: string; age: number };
  enableDarkMode: () => void;
  disableDarkMode: () => void;
  changeUserName: (name: string) => void;
  increaseUserAge: () => void;
}

const useGlobalStore = create<GlobalStoreState>(
  // @ts-ignore
  persist(
    (set, get) => ({
      isDarkMode: undefined,
      user: { name: "John Doe", age: 25 },
      enableDarkMode: () => set(() => ({ isDarkMode: true })),
      disableDarkMode: () => set(() => ({ isDarkMode: false })),
      changeUserName: (name: string) =>
        set(() => ({ user: { name, age: 25 } })),
      increaseUserAge: () =>
        set((state) => ({ user: { ...state.user, age: get().user.age + 1 } })),
    }),
    {
      name: "global-store",
      storage: createJSONStorage(() => mmkvStorage),
    }
  )
);

export { useGlobalStore };
