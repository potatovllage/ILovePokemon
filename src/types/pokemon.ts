export interface PokemonBasic {
  name: string;
  url: string;
}

export interface PokemonAll {
  results: PokemonBasic[];
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonListDetails {
  name: string;
  types: PokemonType[];
  id: number;
  sprites: {
    front_default: string;
  };
}

export interface PokemonLanguage {
  language: PokemonBasic;
}
