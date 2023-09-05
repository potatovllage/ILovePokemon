import style from "./style.module.scss";
import bind from "../../../styles/cx";
import monsterball from "../../../assets/image/pokeball.png";
import type { PokemonType, PokemonNameData } from "../../../types/pokemon";
import TypeLabel from "../../navigation/TypeLable";
import {
  usePokemonListDetail,
  usePokemonListWithSpcies,
} from "../../../hooks/usePokemon";
import { useChangeLanguageStore } from "../../../store";
import { useNavigate } from "react-router-dom";

interface PokemonNameProps {
  englishName: string;
}

const cx = bind(style);

function Item({ englishName }: PokemonNameProps) {
  const { language } = useChangeLanguageStore();
  const { data: pokemonItem } = usePokemonListDetail(englishName);
  const { data: pokemonSpcies } = usePokemonListWithSpcies(pokemonItem?.id);

  const navigage = useNavigate();

  const koreanNameData = pokemonSpcies?.names?.find(
    (nameData: PokemonNameData) => nameData.language.name === "ko"
  );

  return (
    <div
      onClick={() => navigage(`/pokemon/${pokemonItem?.id}`)}
      className={cx(style.ItemContainer)}
    >
      <div className={cx(style.ItemHeader)}>
        <div className={cx(style.PokemonInfo)}>
          <img height={30} src={monsterball} alt="monster ball" />
          <h1>{language === "ko" ? koreanNameData?.name : englishName}</h1>
        </div>
        <p className={cx(style.PokemonNumber)}>No.{pokemonItem?.id}</p>
      </div>
      <div className={cx(style.PokemonItemContent)}>
        <img
          width={80}
          height={80}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonItem?.id}.png`}
          alt={language === "ko" ? koreanNameData?.name : pokemonItem?.name}
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
