import { api } from "../config/axios";
import { PokemonAll, PokemonBasic, PokemonListDetails } from "../types/pokemon";

export const getPokemonList = async (): Promise<PokemonBasic[]> => {
  const { data } = await api.get<PokemonAll>("pokemon?limit=151");
  return data.results;
};

export const getPokemonListDetail = async (name: string) => {
  const response = await api.get<PokemonListDetails>(`pokemon/${name}`);
  return response.data;
};
