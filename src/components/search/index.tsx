/* eslint-disable unicorn/consistent-function-scoping */
import style from "./style.module.scss";
import bind from "../../styles/cx";
import rotom from "../../assets/image/rotomPokedex.png";
import { useChangeLanguageStore, useSearchPokemonStore } from "../../store";
import { useState, type ChangeEvent, type FormEvent } from "react";

const cx = bind(style);

function Search() {
  const [searchPokemon, setSearchPokemon] = useState<string>("");
  const { changeSearchPokemon } = useSearchPokemonStore();
  const { language } = useChangeLanguageStore();

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const getLanguagePlaceholder = () => {
    if (language === "en") return "Search Pokemon With Name or Id!";
    else if (language === "ko")
      return "포켓몬 이름 또는 아이디를 입력해주세요!";
  };

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const handleChangeSearchTab = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchPokemon(event.target.value);
  };

  const handleEnterForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    changeSearchPokemon(searchPokemon);
  };

  const handleClickSearchImage = () => {
    changeSearchPokemon(searchPokemon);
  };

  return (
    <form className={cx(style.SearchContainer)} onSubmit={handleEnterForm}>
      <input
        onChange={handleChangeSearchTab}
        placeholder={getLanguagePlaceholder()}
        className={cx(style.Search)}
      />
      <img
        onClick={handleClickSearchImage}
        className={cx(style.PokeDexImg)}
        height={40}
        src={rotom}
        alt="rotomPokedex"
      />
    </form>
  );
}

export default Search;
