import style from "./style.module.scss";
import bind from "../../../styles/cx";

const cx = bind(style);

function Item() {
  return <div className={cx(style.ItemContainer)}>a</div>;
}

export default Item;
