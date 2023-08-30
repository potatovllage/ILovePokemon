import { api } from "../config/axios";
import type {
  PokemonAll,
  PokemonBasic,
  PokemonListDetails,
  PokemonSpecies,
  PokemonEvolvesProperties,
  PokemonTypeAll,
} from "../types/pokemon";

export const getPokemonList = async (): Promise<PokemonBasic[]> => {
  const { data } = await api.get<PokemonAll>("pokemon?limit=493");
  return data.results;
};

export const getPokemonTypeList = async (type: string) => {
  const response = await api.get<PokemonTypeAll>(
    `https://pokeapi.co/api/v2/type/${type}?limit=493`
  );
  return response.data.pokemon;
};

export const getPokemonListDetail = async (name: string) => {
  const response = await api.get<PokemonListDetails>(`pokemon/${name}`);
  return response.data;
};

export const getPokemonListWithSpecies = async (id: number) => {
  const response = await api.get<PokemonSpecies>(`pokemon-species/${id}`);
  return response.data;
};

export const getPokemonEvolution = async (url: string) => {
  const newUrl = url.split("v2")[1];
  const response = await api.get<PokemonEvolvesProperties[]>(newUrl);
  return response.data;
};
