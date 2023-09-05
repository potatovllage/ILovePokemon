import styles from "./style.module.scss";
import bind from "../../../styles/cx";
import Item from "./Item";
import { useInfiniteQuery } from "react-query";
import { getPokemonList } from "../../../apis/pokemonApi";
import { PokemonBasic } from "../../../types/pokemon";
import { useRef, useCallback, useEffect } from "react";
import { useSearchPokemonStore } from "../../../store";
import ScrollTopButton from "../../common/scrollTop";

const cx = bind(styles);

function PokemonList() {
  const { searchPokemon } = useSearchPokemonStore();
  const observerReference = useRef(null);

  const {
    data: pokemonData,
    status,
    hasNextPage,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(
    ["pokemonList", searchPokemon],
    ({ pageParam: pageParameter = 0 }) =>
      getPokemonList({ page: pageParameter, pokemon: searchPokemon }),
    {
      getNextPageParam: (lastPage) => {
        const { next } = lastPage;
        if (!next) return;
        return Number(new URL(next).searchParams.get("offset"));
      },
    }
  );

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetching]
  );

  useEffect(() => {
    if (observerReference.current) {
      const observer = new IntersectionObserver(handleObserver);
      observer.observe(observerReference.current);
    }
  }, [fetchNextPage, hasNextPage, handleObserver]);

  const pokemonList =
    pokemonData?.pages.flatMap((pageData) => pageData.results) || [];

  return (
    <div style={{ display: "flex" }}>
      <div className={cx(styles.ListWrapper)}>
        {status === "success" && (
          <>
            {pokemonList.map((item: PokemonBasic, index) => (
              <Item key={index} name={item.name} />
            ))}
          </>
        )}

        <div ref={observerReference} />
      </div>
      <ScrollTopButton />
    </div>
  );
}

export default PokemonList;
