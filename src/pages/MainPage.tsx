import style from "../styles/pages/main.module.scss";
import bind from "../styles/cx";
import TypeNavigation from "../components/navigation/TypeNavigation";
import Header from "../components/header";

const cx = bind(style);

function MainPage() {
  return (
    <div className={cx(style.Wrapper)}>
      <Header />
      <TypeNavigation />
    </div>
  );
}

export default MainPage;
