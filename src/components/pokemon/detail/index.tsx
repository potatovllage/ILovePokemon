import style from "./style.module.scss";
import bind from "../../../styles/cx";
import { useParams } from "react-router-dom";
import {
  usePokemonListDetail,
  usePokemonListWithSpcies,
} from "../../../hooks/usePokemonList";
import { useChangeLanguage } from "../../../store";
import { PokemonType } from "../../../types/pokemon";
import TypeLabel from "../../navigation/TypeLable";

const cx = bind(style);

function PokemonDetail() {
  let params = useParams();
  const { language } = useChangeLanguage();
  const { data: pokemonSpcies } = usePokemonListWithSpcies(Number(params.id));
  const { data: pokemonInfo } = usePokemonListDetail(pokemonSpcies?.name!);

  console.log(pokemonSpcies);

  const koreanNameData = pokemonSpcies?.names?.find(
    (nameData: any) => nameData.language.name === "ko"
  );

  const koreanPokemonData = pokemonSpcies?.genera.find(
    (nameData: any) => nameData.language.name === "ko"
  );

  const koreanDescription = pokemonSpcies?.flavor_text_entries.find(
    (nameData: any) => nameData.language.name === "ko"
  );

  return (
    <div className={cx(style.Wrapper)}>
      <img
        className={cx(style.PokemonImage)}
        width={120}
        height={120}
        src={String(pokemonInfo?.sprites.front_default)}
        alt={pokemonInfo?.name}
      />
      <h1 className="pokemonName">
        {language === "ko"
          ? `${koreanNameData?.name} / ${koreanPokemonData?.genus}`
          : `${pokemonInfo?.name} / ${
              pokemonSpcies?.genera.find(
                (nameData: any) => nameData.language.name === "en"
              )?.genus
            }`}
      </h1>
      <div className={cx(style.PokemonTypeLabel)}>
        {pokemonInfo?.types.map((type: PokemonType, index: number) => (
          <TypeLabel key={index} typeData={type} />
        ))}
      </div>
      <p className="pokemonDescription">
        {language === "ko"
          ? koreanDescription?.flavor_text
          : pokemonSpcies?.flavor_text_entries.find(
              (nameData: any) => nameData.language.name === "en"
            )?.flavor_text}
      </p>
    </div>
  );
}

export default PokemonDetail;
