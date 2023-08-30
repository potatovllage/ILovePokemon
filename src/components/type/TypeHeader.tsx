import style from "./style.module.scss";
import bind from "../../styles/cx";
import { useParams } from "react-router-dom";
import { BackgroundColor } from "../../utils/pokemonTypeColor";
import { useChangeLanguage } from "../../store";
import { ConvertedText } from "../../utils/pokemonTypeText";

const cx = bind(style);

function TypeHeader() {
  const parameter = useParams();
  const { language } = useChangeLanguage();
  const backgroundColor = BackgroundColor[parameter.type!];

  return (
    <div className={cx(style.TypeHeader)}>
      <h3 className={cx(style.TypeName)} style={{ color: backgroundColor }}>
        {language === "en" ? parameter.type : ConvertedText[parameter.type!]}
      </h3>
    </div>
  );
}

export default TypeHeader;
