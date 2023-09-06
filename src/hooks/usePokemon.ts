import { useQuery } from "react-query";
import {
  getPokemonListDetail,
  getPokemonListWithSpecies,
  getPokemonEvolution,
  getPokemonTypeList,
} from "../apis/pokemonApi";

export const usePokemonTypeList = (type: string) => {
  return useQuery(["pokemonTypeList", type], () => getPokemonTypeList(type));
};

export const usePokemonListDetail = (name?: string) => {
  return useQuery(
    ["pokemonListDetail", name],
    () => getPokemonListDetail(name!),
    { enabled: !!name }
  );
};

export const usePokemonListWithSpecies = (id?: number) => {
  return useQuery(
    ["pokemonSpecies", id],
    () => getPokemonListWithSpecies(id!),
    {
      enabled: !!id,
    }
  );
};

export const usePokemonEvolution = (url: string) => {
  return useQuery("pokemonEvolution", () => getPokemonEvolution(url));
};
