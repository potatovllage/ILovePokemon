import { create } from "zustand";
import type { ChangeLanguageState } from "../types/store";

export const useChangeLanguage = create<ChangeLanguageState>((set) => ({
  language: false,
  setChanegLanguage: () => {
    set((state) => ({
      ...state,
      toggleFilter: !state.language,
    }));
  },
}));
