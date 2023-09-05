export interface ChangeLanguageState {
  language: string;
  changeLanguage: (lang: string) => void;
}

export interface InputState {
  searchPokemon: string;
  changeSearchPokemon: (text: string) => void;
}
