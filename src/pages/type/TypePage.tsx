import style from "../../styles/pages/type.module.scss";
import bind from "../../styles/cx";
import Header from "../../components/header";
import TypeHeader from "../../components/type/TypeHeader";
import PokemonTypeList from "../../components/type/PokemonTypeList";

const cx = bind(style);

function TypePage() {
  return (
    <div className={cx(style.Wrapper)}>
      <Header />
      <TypeHeader />
      <PokemonTypeList />
    </div>
  );
}

export default TypePage;
