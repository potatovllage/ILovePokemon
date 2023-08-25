import { api } from "../config/axios";
import { PokemonAll, PokemonBasic } from "../types/pokemon";

export const getPokemonList = async (): Promise<PokemonBasic[]> => {
  const { data } = await api.get<PokemonAll>("pokemon?limit=151");
  return data.results;
};

export const getPokemonImage = async (name: string) => {
  const response = await api.get(`pokemon/${name}`);
  return response.data.sprites.front_default;
};
