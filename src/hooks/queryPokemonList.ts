import { useInfiniteQuery } from "react-query";
import { getPokemonList } from "../apis/pokemonApi";
import { useSearchPokemonStore } from "../store";

export default function useInfinityQueryPokemonList() {
  const { searchPokemon } = useSearchPokemonStore();

  return useInfiniteQuery(
    ["pokemonList", searchPokemon],
    ({ pageParam: pageParameter = 0 }) => getPokemonList(pageParameter),
    {
      getNextPageParam: (lastPage) => {
        const { next } = lastPage;
        if (!next) return;
        return Number(new URL(next).searchParams.get("offset"));
      },
    }
  );
}
