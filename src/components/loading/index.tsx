import style from "./style.module.scss";
import bind from "../../styles/cx";
import monsterBall from "../../assets/image/MonsterBall.png";

const cx = bind(style);

function LoadingScreen() {
  return (
    <div className={cx(style.LoadingContainer)}>
      <img className={cx(style.MonsterBall)} src={monsterBall} alt="loading" />
    </div>
  );
}

export default LoadingScreen;
