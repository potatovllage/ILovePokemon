import style from "./style.module.scss";
import bind from "../../styles/cx";
import monsterBall from "../../assets/image/MonsterBall.png";
import globe from "../../assets/image/Globe.png";
import { useNavigate } from "react-router-dom";

const cx = bind(style);

function Header() {
  const naviagate = useNavigate();

  return (
    <header className={cx(style.Wrapper)}>
      <div className={cx(style.HeaderContainer)}>
        <div onClick={() => naviagate("/")} className={cx(style.LogoContainer)}>
          <img height={50} src={monsterBall} alt="mainlogo" />
        </div>
        <div className={cx(style.ChangeLanguageContainer)}>
          <img height={24} src={globe} alt="globe" />
          <p className={cx(style.Language)}>English</p>
          <p>|</p>
          <p className={cx(style.Language)}>한국어</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
