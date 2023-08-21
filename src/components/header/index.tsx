import style from "./style.module.scss";
import bind from "../../styles/cx";
import monsterBall from "../../assets/image/MonsterBall.png";
import globe from "../../assets/image/Globe.png";
import { useNavigate } from "react-router-dom";
import { useChangeLanguage } from "../../store";

const cx = bind(style);

function Header() {
  const naviagate = useNavigate();
  const { setChanegLanguage, language } = useChangeLanguage();

  return (
    <header className={cx(style.Wrapper)}>
      <div className={cx(style.HeaderContainer)}>
        <div onClick={() => naviagate("/")} className={cx(style.LogoContainer)}>
          <img height={50} src={monsterBall} alt="mainlogo" />
        </div>
        <div className={cx(style.ChangeLanguageContainer)}>
          <img height={24} src={globe} alt="globe" />
          <p
            className={cx(style.Language)}
            onClick={() => setChanegLanguage("en")}
          >
            English
          </p>
          <p>|</p>
          <p
            className={cx(style.Language)}
            onClick={() => setChanegLanguage("ko")}
          >
            한국어
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
