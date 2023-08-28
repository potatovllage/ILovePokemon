import { useQuery } from "react-query";
import {
  getPokemonListDetail,
  getPokemonList,
  getPokemonListWithSpecies,
  getPokemonEvolution,
} from "../apis/pokemonApi";

export const usePokemonList = () => {
  return useQuery("pokemonList", () => getPokemonList());
};

export const usePokemonListDetail = (name?: string) => {
  return useQuery(
    ["pokemonListDetail", name],
    () => getPokemonListDetail(name!),
    { enabled: !!name }
  );
};

export const usePokemonListWithSpcies = (id?: number) => {
  return useQuery(["pokemonSpcies", id], () => getPokemonListWithSpecies(id!), {
    enabled: !!id,
  });
};

export const usePokemonEvolution = (url: string) => {
  return useQuery("pokemonEvolution", () => getPokemonEvolution(url));
};
