import style from "./style.module.scss";
import bind from "../../styles/cx";
import { usePokemonTypeList } from "../../hooks/usePokemon";
import { useParams } from "react-router-dom";
import LoadingProgress from "../loading";
import Item from "../pokemon/list/Item";

const cx = bind(style);

function PokemonTypeList() {
  const parameter = useParams();
  const { data: pokemonTypeList, isFetching } = usePokemonTypeList(
    parameter.type!
  );

  return (
    <div className={cx(style.ListWrapper)}>
      {isFetching ? (
        <LoadingProgress />
      ) : (
        pokemonTypeList?.map((item) => (
          <Item key={item.pokemon.name} englishName={item.pokemon.name} />
        ))
      )}
    </div>
  );
}

export default PokemonTypeList;
