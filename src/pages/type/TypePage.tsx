import style from "../../styles/pages/type.module.scss";
import bind from "../../styles/cx";
import Header from "../../components/header";
import TypeHeader from "../../components/type/TypeHeader";
import { useParams } from "react-router-dom";
import PokemonTypeList from "../../components/type/PokemonTypeList";

const cx = bind(style);

function TypePage() {
  const parameter = useParams();
  console.log(parameter.type);

  return (
    <div className={cx(style.Wrapper)}>
      <Header />
      <TypeHeader />
      <PokemonTypeList />
    </div>
  );
}

export default TypePage;
