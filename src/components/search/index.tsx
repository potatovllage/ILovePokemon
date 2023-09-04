import style from "./style.module.scss";
import bind from "../../styles/cx";
import rotom from "../../assets/image/rotomPokedex.png";
import { useChangeLanguage } from "../../store";

const cx = bind(style);

function Search() {
  const { language } = useChangeLanguage();

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const getLanguagePlaceholder = () => {
    if (language === "en") return "Seach Pokemon With Name or Id!";
    else if (language === "ko")
      return "포켓몬 이름 또는 아이디를 입력해주세요!";
  };

  return (
    <form className={cx(style.SearchContainer)}>
      <input
        placeholder={getLanguagePlaceholder()}
        className={cx(style.Search)}
      />
      <img
        className={cx(style.PokeDexImg)}
        height={40}
        src={rotom}
        alt="rotomPokedex"
      />
    </form>
  );
}

export default Search;
