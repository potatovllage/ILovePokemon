import style from "./style.module.scss";
import bind from "../../../styles/cx";
import Item from "./Item";

const cx = bind(style);

function MainList() {
  return (
    <div className={cx(style.ListWrapper)}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}

export default MainList;
