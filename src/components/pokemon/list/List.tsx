import style from "./style.module.scss";
import bind from "../../../styles/cx";
import Item from "./Item";
import { usePokemonList } from "../../../hooks/usePokemon";
import LoadingProgress from "../../loading";

const cx = bind(style);

function PokemonList() {
  const { data: pokemonList, isFetching } = usePokemonList();

  return (
    <div className={cx(style.ListWrapper)}>
      {isFetching ? (
        <LoadingProgress />
      ) : (
        pokemonList?.map((item) => (
          <Item key={item.name} englishName={item.name} />
        ))
      )}
    </div>
  );
}

export default PokemonList;
