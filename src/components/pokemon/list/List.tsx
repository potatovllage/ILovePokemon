import style from "./style.module.scss";
import bind from "../../../styles/cx";
import Item from "./Item";
import { usePokemonList } from "../../../hooks/usePokemonList";

const cx = bind(style);

function MainList() {
  const { data: list } = usePokemonList();

  return (
    <div className={cx(style.ListWrapper)}>
      {list?.map((item) => (
        <Item key={item.name} name={item.name} />
      ))}
    </div>
  );
}

export default MainList;
