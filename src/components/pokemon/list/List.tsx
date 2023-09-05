import styles from "./style.module.scss";
import bind from "../../../styles/cx";
import Item from "./Item";
import { useInfiniteQuery } from "react-query";
import { getPokemonList } from "../../../apis/pokemonApi";
import { PokemonBasic } from "../../../types/pokemon";
import { useRef, useCallback, useEffect } from "react";
import { useSearchPokemonStore } from "../../../store";

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

  // utils로 이동
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const pokemonList =
    pokemonData?.pages.flatMap((pageData) => pageData.results) || [];

  return (
    <div style={{ display: "flex" }}>
      <div className={cx(styles.ListWrapper)}>
        {status === "success" && (
          <>
            {pokemonList.map((item: PokemonBasic, index) => (
              <Item key={index} englishName={item.name} />
            ))}
          </>
        )}

        <div ref={observerReference} />
      </div>
      <button onClick={scrollToTop} className={cx(styles.ScrollTopButton)}>
        ⬆️
      </button>
    </div>
  );
}

export default PokemonList;
