import style from "./style.module.scss";
import bind from "../../../styles/cx";
import monsterball from "../../../assets/image/MonsterBall.png";
import { PokemonType } from "../../../types/pokemon";
import TypeLabel from "../../navigation/TypeLable";
import { usePokemonImage } from "../../../hooks/usePokemonList";

interface Props {
  name: string;
  pokemonNumber: number;
}

const cx = bind(style);

export const typeListAll = [
  { slot: 0, type: { name: "normal", url: "" } },
  { slot: 0, type: { name: "fighting", url: "" } },
];

function Item({ name, pokemonNumber }: Props) {
  const { data: pokemonImg } = usePokemonImage(name);

  return (
    <div className={cx(style.ItemContainer)}>
      <div className={cx(style.ItemHeader)}>
        <div className={cx(style.PokemonInfo)}>
          <img height={20} src={monsterball} alt="monster ball" />
          <h1>{name}</h1>
        </div>
        <p className={cx(style.PokemonNumber)}>No.{pokemonNumber}</p>
      </div>
      <div className={cx(style.PokemonItemContent)}>
        <img width={80} height={120} src={pokemonImg} alt={pokemonImg} />
        <div className={cx(style.PokemonTypeLabel)}>
          {typeListAll.map((type: PokemonType, index: number) => (
            <TypeLabel key={index} typeData={type} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Item;
