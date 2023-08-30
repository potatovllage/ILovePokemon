import style from "./style.module.scss";
import bind from "../../../styles/cx";
import Item from "./Item";
import { usePokemonList, usePokemonTypeList } from "../../../hooks/usePokemon";

interface PokemonTypeProps {
  pokemonType?: string;
}

const cx = bind(style);

function PokemonList({ pokemonType }: PokemonTypeProps) {
  const { data: pokemonList } = usePokemonList();
  const { data: pokemonTypeList } = usePokemonTypeList(pokemonType!);

  return (
    <div className={cx(style.ListWrapper)}>
      {pokemonType
        ? pokemonTypeList?.map((item) => (
            <Item key={item.pokemon.name} englishName={item.pokemon.name} />
          ))
        : pokemonList?.map((item) => (
            <Item key={item.name} englishName={item.name} />
          ))}
    </div>
  );
}

export default PokemonList;
