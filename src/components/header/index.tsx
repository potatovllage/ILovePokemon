import style from "./style.module.scss";
import bind from "../../styles/cx";
import monsterBall from "../../assets/image/MonsterBall.png";
import { useNavigate } from "react-router-dom";

const cx = bind(style);

function Header() {
  const naviagate = useNavigate();

  return (
    <header className={cx(style.Wrapper)}>
      <div className={cx(style.HeaderContainer)}>
        <div onClick={() => naviagate("/")} className={cx(style.LogoContainer)}>
          <img height={50} src={monsterBall} alt="mainlogo" />
        </div>
      </div>
    </header>
  );
}

export default Header;
