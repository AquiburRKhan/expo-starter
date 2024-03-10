import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { mmkvStorage } from "./persistStorage/mmkvStorage";

export interface GlobalStoreState {
  settings: {
    languageCode: "en" | "bn";
    theme: "light" | "dark" | "system";
  };
  tasks: Task[];
  enableDarkMode: () => void;
  enableLightMode: () => void;
  enableSystemMode: () => void;
  setLanguageToBanglaInStore: () => void;
  setLanguageToEnglishInStore: () => void;
  addTask: (task: Task) => void;
  editTask: (task: Task) => void;
  deleteTask: (id: number) => void;
}

interface Task {
  id?: number;
  title: string;
  description: string;
}

const useGlobalStore = create<GlobalStoreState>(
  // @ts-ignore
  persist(
    (set, get) => ({
      settings: {
        languageCode: "bn",
        theme: "system",
      },
      tasks: [],
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
      addTask: (task: Task) => {
        const newTask = {
          ...task,
          id: Date.now(),
        };

        set(() => ({
          tasks: [...get().tasks, newTask],
        }));
      },
      editTask: (task: Task) => {
        set(() => ({
          tasks: get().tasks.map((t) => {
            if (t.id === task.id) {
              return task;
            }
            return t;
          }),
        }));
      },
      deleteTask: (id: number) => {
        set(() => ({
          tasks: get().tasks.filter((task) => task.id !== id),
        }));
      },
    }),
    {
      name: "task-tracker-v2",
      storage: createJSONStorage(() => mmkvStorage),
    }
  )
);

export { useGlobalStore };
