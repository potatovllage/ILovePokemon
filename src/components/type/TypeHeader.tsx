import style from "./style.module.scss";
import bind from "../../styles/cx";
import { useParams } from "react-router-dom";
import { BackgroundColor } from "../../utils/pokemonTypeColor";
import { useChangeLanguageStore } from "../../store";
import { ConvertedText } from "../../utils/pokemonTypeText";

const cx = bind(style);

function TypeHeader() {
  const parameter = useParams();
  const { language } = useChangeLanguageStore();
  const backgroundColor = BackgroundColor[parameter.type!];

  return (
    <div
      className={cx(style.TypeHeader)}
      style={{ backgroundColor: backgroundColor }}
    >
      <img
        src={`/images/type/${parameter.type}.svg`}
        alt={parameter.type}
        width={40}
        style={{ margin: "0 14px 0 0" }}
      />
      <h2 className={cx(style.TypeName)}>
        {language === "en" ? parameter.type : ConvertedText[parameter.type!]}
      </h2>
    </div>
  );
}

export default TypeHeader;
