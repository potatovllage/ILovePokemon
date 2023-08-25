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
export interface PokemonSpecies {
  id: number;
  name: string;
  names: {
    name: string;
    language: {
      name: string;
    };
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
    };
  }[];
  genera: {
    genus: string;
    language: {
      name: string;
    };
  }[];
}
