import style from "../styles/pages/main.module.scss";
import bind from "../styles/cx";
import Header from "../components/header";

const cx = bind(style);

function MainPage() {
  return (
    <div className={cx(style.Wrapper)}>
      <Header />
    </div>
  );
}

export default MainPage;
