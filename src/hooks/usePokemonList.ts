import { useQuery } from "react-query";
import { getPokemonImage, getPokemonList } from "../apis/pokemonApi";

export const usePokemonList = () => {
  return useQuery(["pokemonList"], () => getPokemonList());
};

export const usePokemonImage = (name: string) => {
  return useQuery(["pokemonImage", name], () => getPokemonImage(name));
};
