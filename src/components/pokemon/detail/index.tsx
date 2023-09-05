import style from "./style.module.scss";
import bind from "../../../styles/cx";
import { useParams } from "react-router-dom";
import {
  usePokemonListDetail,
  usePokemonListWithSpcies,
} from "../../../hooks/usePokemon";
import { useChangeLanguageStore } from "../../../store";
import type {
  PokemonType,
  PokemonNameData,
  PokemonFlavorTextData,
  PokemonGeneraData,
} from "../../../types/pokemon";
import TypeLabel from "../../navigation/TypeLable";
import PokemonImage from "../../common/pokemonImage";

const cx = bind(style);

function PokemonDetail() {
  const parameter = useParams();

  const { language } = useChangeLanguageStore();
  const { data: pokemonSpcies } = usePokemonListWithSpcies(
    Number(parameter.id)
  );
  const { data: pokemonItem } = usePokemonListDetail(pokemonSpcies?.name);

  const koreanNameData = pokemonSpcies?.names?.find(
    (nameData: PokemonNameData) => nameData.language.name === "ko"
  );

  const koreanPokemonData = pokemonSpcies?.genera.find(
    (nameData: PokemonGeneraData) => nameData.language.name === "ko"
  );

  const koreanDescription = pokemonSpcies?.flavor_text_entries.find(
    (nameData: PokemonFlavorTextData) => nameData.language.name === "ko"
  );

  return (
    <div className={cx(style.Wrapper)}>
      <div className={cx(style.PokemonImage)}>
        <PokemonImage
          width={120}
          height={120}
          pokemonId={pokemonItem?.id}
          koreaName={koreanNameData?.name}
          name={pokemonItem?.name}
        />
      </div>
      <h1 className="pokemonName">
        {language === "ko"
          ? `${koreanNameData?.name} / ${koreanPokemonData?.genus}`
          : `${pokemonItem?.name} / ${
              pokemonSpcies?.genera.find(
                (nameData: PokemonGeneraData) => nameData.language.name === "en"
              )?.genus
            }`}
      </h1>
      <div className={cx(style.PokemonTypeLabel)}>
        {pokemonItem?.types.map((type: PokemonType, index: number) => (
          <TypeLabel key={index} typeData={type} />
        ))}
      </div>
      <p className="pokemonDescription">
        {language === "ko"
          ? koreanDescription?.flavor_text
          : pokemonSpcies?.flavor_text_entries.find(
              (nameData: PokemonFlavorTextData) =>
                nameData.language.name === "en"
            )?.flavor_text}
      </p>
    </div>
  );
}

export default PokemonDetail;
