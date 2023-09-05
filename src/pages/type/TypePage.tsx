import Header from "../../components/header";
import TypeHeader from "../../components/type/TypeHeader";
import PokemonTypeList from "../../components/type/PokemonTypeList";
import Wrapper from "../../components/common/wrapper/Wrapper";

function TypePage() {
  return (
    <Wrapper>
      <Header />
      <TypeHeader />
      <PokemonTypeList />
    </Wrapper>
  );
}

export default TypePage;
