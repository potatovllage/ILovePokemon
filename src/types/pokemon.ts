export interface PokemonBasic {
  name: string;
  url: string;
}

export interface PokemonAll {
  next: string;
  results: PokemonBasic[];
}

export interface PokemonTypeBasic {
  pokemon: {
    name: string;
  };
}

export interface PokemonTypeAll {
  pokemon: PokemonTypeBasic[];
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

export interface PokemonNameData {
  name: string;
  language: { name: string };
}

export interface PokemonFlavorTextData {
  flavor_text: string;
  language: { name: string };
}

export interface PokemonGeneraData {
  genus: string;
  language: { name: string };
}

export interface PokemonSpecies {
  id: number;
  name: string;
  names: PokemonNameData[];
  flavor_text_entries: PokemonFlavorTextData[];
  genera: PokemonGeneraData[];
  evolution_chain: {
    url: string;
  };
}
export interface PokemonEvolvesProperties {
  chain: EvolvesProperties;
  id: number;
}

export interface EvolvesProperties {
  species: {
    name: string;
  };
  evolution_details: [{ min_level: number }];
  evolves_to: EvolvesProperties[];
}
