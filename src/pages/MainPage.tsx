import TypeNavigation from "../components/navigation/TypeNavigation";
import Header from "../components/header";
import MainList from "../components/pokemon/list/List";
import Wrapper from "../components/common/Wrapper";
import Search from "../components/search";

function MainPage() {
  return (
    <Wrapper>
      <Search />
      <Header />
      <TypeNavigation />
      <MainList />
    </Wrapper>
  );
}

export default MainPage;
