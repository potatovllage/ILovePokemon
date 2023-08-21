import style from "./style.module.scss";
import bind from "../../styles/cx";
import { PokemonType } from "../../types/pokemon";

const cx = bind(style);

const typeListAll = [
  { slot: 0, type: { name: "normal", url: "" } },
  { slot: 0, type: { name: "fighting", url: "" } },
  { slot: 0, type: { name: "flying", url: "" } },
  { slot: 0, type: { name: "poison", url: "" } },
  { slot: 0, type: { name: "ground", url: "" } },
  { slot: 0, type: { name: "rock", url: "" } },
  { slot: 0, type: { name: "bug", url: "" } },
  { slot: 0, type: { name: "ghost", url: "" } },
  { slot: 0, type: { name: "steel", url: "" } },
  { slot: 0, type: { name: "fire", url: "" } },
  { slot: 0, type: { name: "water", url: "" } },
  { slot: 0, type: { name: "grass", url: "" } },
  { slot: 0, type: { name: "electric", url: "" } },
  { slot: 0, type: { name: "psychic", url: "" } },
  { slot: 0, type: { name: "ice", url: "" } },
  { slot: 0, type: { name: "dragon", url: "" } },
  { slot: 0, type: { name: "dark", url: "" } },
  { slot: 0, type: { name: "fairy", url: "" } },
];

function TypeNavigation() {
  return (
    <nav className="group is-tab sm:px-0 py-7 flex flex-wrap">
      {typeListAll.map((type: PokemonType, index: number) => (
        <div key={index}></div>
      ))}
    </nav>
  );
}

export default TypeNavigation;
