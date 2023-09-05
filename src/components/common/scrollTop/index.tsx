import style from "./style.module.scss";
import bind from "../../../styles/cx";
import { scrollToTop } from "../../../utils/scrollToTop";

const cx = bind(style);

function ScrollTopButton() {
  return (
    <button onClick={scrollToTop} className={cx(style.ScrollTopButton)}>
      ⬆️
    </button>
  );
}

export default ScrollTopButton;
