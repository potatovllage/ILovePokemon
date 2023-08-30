import style from "../../styles/pages/type.module.scss";
import bind from "../../styles/cx";
import Header from "../../components/header";
import TypeHeader from "../../components/type/TypeHeader";
import PokemonList from "../../components/pokemon/list/List";
import { useParams } from "react-router-dom";

const cx = bind(style);

function TypePage() {
  const parameter = useParams();
  console.log(parameter.type);

  return (
    <div className={cx(style.Wrapper)}>
      <Header />
      <TypeHeader />
      <PokemonList pokemonType={parameter.type} />
    </div>
  );
}

export default TypePage;
