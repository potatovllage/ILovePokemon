import { useQuery } from "react-query";
import { getPokemonListDetail, getPokemonList } from "../apis/pokemonApi";

export const usePokemonList = () => {
  return useQuery(["pokemonList"], () => getPokemonList());
};

export const usePokemonListDetail = (name: string) => {
  return useQuery(["pokemonListDetail", name], () =>
    getPokemonListDetail(name)
  );
};
