export interface ChangeLanguageState {
  language: string;
  chanegLanguage: (lang: string) => void;
}

export interface InputState {
  searchPokemon: string;
  changeSearchPokemon: (text: string) => void;
}
