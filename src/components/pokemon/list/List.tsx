import style from "./style.module.scss";
import bind from "../../../styles/cx";
import Item from "./Item";
import { usePokemonList } from "../../../hooks/usePokemon";

const cx = bind(style);

function MainList() {
  const { data: pokemonList } = usePokemonList();

  return (
    <div className={cx(style.ListWrapper)}>
      {pokemonList?.map((item) => (
        <Item key={item.name} englishName={item.name} />
      ))}
    </div>
  );
}

export default MainList;
