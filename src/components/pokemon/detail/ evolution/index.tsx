import style from "./style.module.scss";
import bind from "../../../../styles/cx";
import { useParams } from "react-router-dom";
import {
  usePokemonEvolution,
  usePokemonListWithSpcies,
} from "../../../../hooks/usePokemon";
import { useChangeLanguage } from "../../../../store";

const cx = bind(style);

function Evolution() {
  const { language } = useChangeLanguage();
  const parameter = useParams();
  const { data: pokemonSpcies } = usePokemonListWithSpcies(
    Number(parameter.id)
  );
  const { data: evolution } = usePokemonEvolution(
    String(pokemonSpcies?.evolution_chain.url)
  );
  console.log(evolution, "!");

  return <div className={cx(style.Wrapper)}>{}</div>;
}

export default Evolution;
