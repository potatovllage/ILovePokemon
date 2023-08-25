import style from "./style.module.scss";
import bind from "../../../styles/cx";
import monsterball from "../../../assets/image/MonsterBall.png";
import { PokemonType } from "../../../types/pokemon";
import TypeLabel from "../../navigation/TypeLable";
import { usePokemonListDetail } from "../../../hooks/usePokemonList";

interface PokemonNameProps {
  name: string;
}

const cx = bind(style);

function Item({ name }: PokemonNameProps) {
  const { data: pokemonItem } = usePokemonListDetail(name);

  return (
    <div className={cx(style.ItemContainer)}>
      <div className={cx(style.ItemHeader)}>
        <div className={cx(style.PokemonInfo)}>
          <img height={20} src={monsterball} alt="monster ball" />
          <h1>{name}</h1>
        </div>
        <p className={cx(style.PokemonNumber)}>No.{pokemonItem?.id}</p>
      </div>
      <div className={cx(style.PokemonItemContent)}>
        <img
          width={80}
          height={120}
          src={String(pokemonItem?.sprites.front_default)}
          alt={pokemonItem?.name}
        />
        <div className={cx(style.PokemonTypeLabel)}>
          {pokemonItem?.types.map((type: PokemonType, index: number) => (
            <TypeLabel key={index} typeData={type} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Item;
