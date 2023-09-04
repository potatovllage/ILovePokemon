import TypeNavigation from "../components/navigation/TypeNavigation";
import Header from "../components/header";
import MainList from "../components/pokemon/list/List";
import Wrapper from "../components/common/Wrapper";

function MainPage() {
  return (
    <Wrapper>
      <Header />
      <TypeNavigation />
      <MainList />
    </Wrapper>
  );
}

export default MainPage;
