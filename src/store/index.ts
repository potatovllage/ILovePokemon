import { create } from "zustand";
import type { ChangeLanguageState, InputState } from "../types/store";

export const useChangeLanguageStore = create<ChangeLanguageState>((set) => ({
  language: "ko",
  chanegLanguage: (lang) => set({ language: lang }),
}));

export const useSearchPokemonStore = create<InputState>((set) => ({
  searchPokemon: "",
  changeSearchPokemon: (text) => set({ searchPokemon: text }),
}));
