import { ConvertedText } from "../../utils/pokemonTypeText";
import { BackgroundColor } from "../../utils/pokemonTypeColor";
import type { PokemonType } from "../../types/pokemon";
import { useNavigate } from "react-router-dom";
import { useChangeLanguageStore } from "../../store";
import bind from "../../styles/cx";
import style from "./style.module.scss";

interface PockemonTypePorps {
  typeData: PokemonType;
}

const cx = bind(style);

const TypeLabel = ({ typeData }: PockemonTypePorps) => {
  const navigate = useNavigate();
  const { language } = useChangeLanguageStore();

  const backgroundColor = BackgroundColor[typeData?.type?.name];

  return (
    <button
      onClick={() => navigate(`/pokemon/type/${typeData?.type?.name}`)}
      className={cx(style.NavigationTypeButton)}
      key={typeData?.type?.name}
      style={{ backgroundColor }}
    >
      {typeData?.type?.name !== "unknown" &&
        typeData?.type?.name !== "shadow" && (
          <img
            key={typeData?.type?.name}
            src={`/images/type/${typeData?.type?.name}.svg`}
            alt={typeData?.type?.name}
            width={20}
          />
        )}
      <span>
        {language === "en"
          ? typeData?.type?.name
          : ConvertedText[typeData?.type?.name]}
      </span>
    </button>
  );
};

export default TypeLabel;
