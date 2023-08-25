import { api } from "../config/axios";
import {
  PokemonAll,
  PokemonBasic,
  PokemonListDetails,
  PokemonSpecies,
} from "../types/pokemon";

export const getPokemonList = async (): Promise<PokemonBasic[]> => {
  const { data } = await api.get<PokemonAll>("pokemon?limit=151");
  return data.results;
};

export const getPokemonListDetail = async (name: string) => {
  const response = await api.get<PokemonListDetails>(`pokemon/${name}`);
  return response.data;
};

export const getPokemonListWithSpecies = async (id: number) => {
  const response = await api.get<PokemonSpecies>(`pokemon-species/${id}`);
  return response.data;
};
