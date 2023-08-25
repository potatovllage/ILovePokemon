import style from "../../styles/pages/detail.module.scss";
import bind from "../../styles/cx";
import PokemonDetail from "../../components/pokemon/detail";
import Header from "../../components/header";

const cx = bind(style);

function PokemonDetailPage() {
  return (
    <div className={cx(style.Wrapper)}>
      <Header />
      <PokemonDetail />
    </div>
  );
}

export default PokemonDetailPage;
