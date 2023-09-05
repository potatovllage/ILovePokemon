import monsterBall from "../../../assets/image/pokeball.png";
import { useChangeLanguageStore } from "../../../store";
import { GetPokemonImage } from "../../../utils/getPokemonImage";

interface PokemonInfoProps {
  width: number;
  height: number;
  pokemonId: number | undefined;
  koreaName: string | undefined;
  name: string | undefined;
}

function PokemonImage({
  koreaName,
  name,
  pokemonId,
  height,
  width,
}: PokemonInfoProps) {
  const { language } = useChangeLanguageStore();

  return (
    <img
      width={width}
      height={height}
      src={pokemonId ? GetPokemonImage(String(pokemonId)) : monsterBall}
      alt={language === "ko" ? koreaName : name}
    />
  );
}

export default PokemonImage;
