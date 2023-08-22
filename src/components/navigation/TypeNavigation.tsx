import style from "./style.module.scss";
import bind from "../../styles/cx";
import { PokemonType } from "../../types/pokemon";
import TypeLabel from "./TypeLable";
import { typeListAll } from "../../config/typeListAll";

const cx = bind(style);

function TypeNavigation() {
  return (
    <nav className={cx(style.NavigationContainer)}>
      {typeListAll.map((type: PokemonType, index: number) => (
        <TypeLabel key={index} typeData={type} />
      ))}
    </nav>
  );
}

export default TypeNavigation;
