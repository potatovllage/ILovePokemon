import { api } from "../config/axios";
import type {
  PokemonAll,
  PokemonListDetails,
  PokemonSpecies,
  PokemonEvolvesProperties,
  PokemonTypeAll,
  PokemonBasic,
} from "../types/pokemon";

export const getPokemonList = async (page: number) => {
  const { data } = await api.get<PokemonAll>(`pokemon`, {
    params: {
      limit: 30,
      offset: page,
    },
  });
  return data;
};

export const getSearchPokemon = async (search: string) => {
  const { data } = await api.get<PokemonBasic>(`pokemon/${search}`);
  return data;
};

export const getPokemonTypeList = async (type: string) => {
  const response = await api.get<PokemonTypeAll>(`type/${type}`);
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

export const getPokemonSearch = async (pokemon: string) => {
  const response = await api.get(`pokemon/${pokemon}`);
  return response.data;
};
