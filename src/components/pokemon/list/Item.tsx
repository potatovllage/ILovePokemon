import style from "./style.module.scss";
import bind from "../../../styles/cx";
import monsterball from "../../../assets/image/MonsterBall.png";
import { PokemonType } from "../../../types/pokemon";
import TypeLabel from "../../navigation/TypeLable";
import {
  usePokemonListDetail,
  usePokemonListWithSpcies,
} from "../../../hooks/usePokemonList";
import { useChangeLanguage } from "../../../store";

interface PokemonNameProps {
  englishName: string;
}

const cx = bind(style);

function Item({ englishName }: PokemonNameProps) {
  const { language } = useChangeLanguage();
  const { data: pokemonItem } = usePokemonListDetail(englishName);
  const { data: pokemonSpcies } = usePokemonListWithSpcies(pokemonItem?.id!);

  const koreanNameData = pokemonSpcies?.names?.find(
    (nameData: any) => nameData.language.name === "ko"
  );

  return (
    <div className={cx(style.ItemContainer)}>
      <div className={cx(style.ItemHeader)}>
        <div className={cx(style.PokemonInfo)}>
          <img height={20} src={monsterball} alt="monster ball" />
          <h1>{language === "ko" ? koreanNameData?.name : englishName}</h1>
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
