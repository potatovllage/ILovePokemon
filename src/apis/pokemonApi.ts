import { api } from "../config/axios";
import type {
  PokemonAll,
  PokemonListDetails,
  PokemonSpecies,
  PokemonEvolvesProperties,
  PokemonTypeAll,
} from "../types/pokemon";

interface PokemonList {
  page: number;
  pokemon?: string;
}

export const getPokemonList = async ({ page, pokemon }: PokemonList) => {
  let apiURL = "pokemon";
  if (pokemon) apiURL = `/pokemon/${pokemon}`;

  const { data } = await api.get<PokemonAll>(`${apiURL}`, {
    params: {
      limit: 30,
      offset: page,
    },
  });
  return data;
};

export const getPokemonTypeList = async (type: string) => {
  const response = await api.get<PokemonTypeAll>(
    `https://pokeapi.co/api/v2/type/${type}`
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

export const getPokemonSearch = async (pokemon: string) => {
  const response = await api.get(`pokemon/${pokemon}`);
  return response.data;
};
