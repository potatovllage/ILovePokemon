import style from "./style.module.scss";
import bind from "../../styles/cx";
import monsterBall from "../../assets/image/pokeball.png";
import globe from "../../assets/image/Globe.png";
import { useNavigate } from "react-router-dom";
import { useChangeLanguageStore, useSearchPokemonStore } from "../../store";

const cx = bind(style);

function Header() {
  const navigate = useNavigate();
  const { changeLanguage, language } = useChangeLanguageStore();
  const { changeSearchPokemon } = useSearchPokemonStore();

  const handleHeaderLogo = () => {
    changeSearchPokemon("");
    navigate("/");
  };

  return (
    <header className={cx(style.Wrapper)}>
      <div className={cx(style.HeaderContainer)}>
        <div onClick={handleHeaderLogo} className={cx(style.LogoContainer)}>
          <img height={80} src={monsterBall} alt="mainlogo" />
          <h1>{language === "ko" ? "포켓몬 도감" : "Pokemon Encyclopedia"}</h1>
        </div>
        <div className={cx(style.ChangeLanguageContainer)}>
          <img height={24} src={globe} alt="globe" />
          <p
            className={cx(style.Language)}
            onClick={() => changeLanguage("en")}
          >
            English
          </p>
          <p>|</p>
          <p
            className={cx(style.Language)}
            onClick={() => changeLanguage("ko")}
          >
            한국어
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
