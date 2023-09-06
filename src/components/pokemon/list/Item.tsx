import style from "./style.module.scss";
import bind from "../../../styles/cx";
import monsterball from "../../../assets/image/pokeball.png";
import type { PokemonType, PokemonNameData } from "../../../types/pokemon";
import TypeLabel from "../../navigation/TypeLable";
import {
  usePokemonListDetail,
  usePokemonListWithSpecies,
} from "../../../hooks/usePokemon";
import { useChangeLanguageStore } from "../../../store";
import { useNavigate } from "react-router-dom";
import PokemonImage from "../../common/pokemonImage";
import ScrollTopButton from "../../common/scrollTop";

interface PokemonNameProps {
  name: string;
}

const cx = bind(style);

function Item({ name }: PokemonNameProps) {
  const { language } = useChangeLanguageStore();
  const { data: pokemonItem } = usePokemonListDetail(name);
  const { data: pokemonSpecies } = usePokemonListWithSpecies(pokemonItem?.id);

  const navigate = useNavigate();

  const koreanNameData = pokemonSpecies?.names?.find(
    (nameData: PokemonNameData) => nameData.language.name === "ko"
  );

  return (
    <>
      <div
        onClick={() => navigate(`/pokemon/${pokemonItem?.id}`)}
        className={cx(style.ItemContainer)}
      >
        <div className={cx(style.ItemHeader)}>
          <div className={cx(style.PokemonInfo)}>
            <img height={30} src={monsterball} alt="monster ball" />
            <h1>{language === "ko" ? koreanNameData?.name : name}</h1>
          </div>
          <p className={cx(style.PokemonNumber)}>
            {pokemonItem?.id ? `No.${pokemonItem?.id}` : `No. ???`}
          </p>
        </div>
        <div className={cx(style.PokemonItemContent)}>
          <PokemonImage
            width={80}
            height={80}
            pokemonId={pokemonItem?.id}
            koreaName={koreanNameData?.name}
            name={pokemonItem?.name}
          />
          <div className={cx(style.PokemonTypeLabel)}>
            {pokemonItem?.types.map((type: PokemonType, index: number) => (
              <TypeLabel key={index} typeData={type} />
            ))}
          </div>
        </div>
      </div>
      <ScrollTopButton />
    </>
  );
}

export default Item;
