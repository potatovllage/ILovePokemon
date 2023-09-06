import styles from "./style.module.scss";
import bind from "../../../styles/cx";
import Item from "./Item";
import { PokemonBasic } from "../../../types/pokemon";
import useInfinityQueryPokemonList from "../../../hooks/queryPokemonList";
import LoadingScreen from "../../loading";
import InfinityScrollTrigger from "../../common/scrollTrigger";
import { useSearchPokemon } from "../../../hooks/usePokemon";
import { useSearchPokemonStore } from "../../../store";

const cx = bind(styles);

function PokemonList() {
  const { searchPokemon } = useSearchPokemonStore();
  const {
    data: pokemonData,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfinityQueryPokemonList();
  const { data: pokemonSearchData, status } = useSearchPokemon(searchPokemon);
  const showLoadingScreen = isFetching && !isFetchingNextPage;

  const pokemonList =
    pokemonData?.pages.flatMap((pageData) => pageData.results) || [];

  const searchPokemonList = (
    <>
      {status === "error" && (
        <h1 className={cx(styles.searchMessage)}>
          검색하신 데이터가 없습니다.
        </h1>
      )}
      {status === "loading" && <LoadingScreen />}
      {status === "success" && <Item name={String(pokemonSearchData?.name)} />}
    </>
  );

  return (
    <div style={{ display: "flex" }}>
      <div className={cx(styles.ListWrapper)}>
        {showLoadingScreen ? (
          <LoadingScreen />
        ) : (
          <>
            {searchPokemon
              ? searchPokemonList
              : pokemonList.map((item: PokemonBasic, index: number) => (
                  <Item key={index} name={item.name} />
                ))}
            <InfinityScrollTrigger
              callback={fetchNextPage}
              enabled={hasNextPage && !isFetching}
              options={{ rootMargin: "100px 0px 0px 0px" }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default PokemonList;
