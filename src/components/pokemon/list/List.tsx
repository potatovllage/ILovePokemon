import styles from "./style.module.scss";
import bind from "../../../styles/cx";
import Item from "./Item";
import { useInfiniteQuery } from "react-query";
import { getPokemonList } from "../../../apis/pokemonApi";
import LoadingProgress from "../../loading";
import { PokemonBasic } from "../../../types/pokemon";
import { useRef, useCallback, useEffect } from "react";

const cx = bind(styles);

function PokemonList() {
  const observerReference = useRef(null);

  const {
    data: pokemonData,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    "pokemonList",
    ({ pageParam: pageParameter = 0 }) => getPokemonList(pageParameter),
    {
      getNextPageParam: (lastPage) => {
        const { next } = lastPage;
        if (!next) return null;
        return Number(new URL(next).searchParams.get("offset"));
      },
    }
  );

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  useEffect(() => {
    if (observerReference.current) {
      const observer = new IntersectionObserver(handleObserver);
      observer.observe(observerReference.current);
    }
  }, [fetchNextPage, hasNextPage, handleObserver]);

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
        {isLoading ? (
          <LoadingProgress />
        ) : (
          <>
            {pokemonList.map((item: PokemonBasic, index) => (
              <Item key={index} englishName={item.name} />
            ))}
            <div ref={observerReference}></div>
          </>
        )}
      </div>
      <button onClick={scrollToTop} className={cx(styles.ScrollTopButton)}>
        ⬆️
      </button>
    </div>
  );
}

export default PokemonList;
