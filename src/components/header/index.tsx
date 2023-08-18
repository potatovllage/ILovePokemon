import style from "./style.module.scss";
import bind from "../../styles/cx";
import mainlogo from "../../assets/image/MainLogo.png";
import { useNavigate } from "react-router-dom";

const cx = bind(style);

function Header() {
  const naviagate = useNavigate();

  return (
    <header className={cx(style.Wrapper)}>
      <div className={cx(style.HeaderContainer)}>
        <div
          onClick={() => naviagate("/main")}
          className={cx(style.LogoContainer)}
        >
          <img height={80} src={mainlogo} alt="mainlogo" />
          <h1>포켓몬 도감</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
