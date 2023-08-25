import style from "./style.module.scss";
import bind from "../../../styles/cx";
import Item from "./Item";
import { usePokemonList } from "../../../hooks/usePokemonList";

const cx = bind(style);

function MainList() {
  const { data: list } = usePokemonList();

  console.log(list);

  return (
    <div className={cx(style.ListWrapper)}>
      {list?.map((item, idx) => (
        <Item key={item.name} name={item.name} pokemonNumber={idx + 1} />
      ))}
    </div>
  );
}

export default MainList;
