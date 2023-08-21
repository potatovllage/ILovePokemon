import { create } from "zustand";
import type { ChangeLanguageState } from "../types/store";

export const useChangeLanguage = create<ChangeLanguageState>((set) => ({
  language: "ko",
  setChanegLanguage: (lang) => set({ language: lang }),
}));
