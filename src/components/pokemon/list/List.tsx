import styles from "./style.module.scss";
import bind from "../../../styles/cx";
import Item from "./Item";
import { PokemonBasic } from "../../../types/pokemon";
import useInfinityQueryPokemonList from "../../../hooks/queryPokemonList";
import LoadingScreen from "../../loading";
import InfinityScrollTrigger from "../../common/scrollTrigger";

const cx = bind(styles);

function PokemonList() {
  const {
    data: pokemonData,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfinityQueryPokemonList();
  const showLoadingScreen = isFetching && !isFetchingNextPage;

  const pokemonList =
    pokemonData?.pages.flatMap((pageData) => pageData.results) || [];

  return (
    <div style={{ display: "flex" }}>
      <div className={cx(styles.ListWrapper)}>
        {showLoadingScreen ? (
          <LoadingScreen />
        ) : (
          <>
            {pokemonList.map((item: PokemonBasic, index) => (
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
