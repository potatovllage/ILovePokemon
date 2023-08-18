import style from "../styles/pages/start.module.scss";
import bind from "../styles/cx";
import ball from "../assets/MonsterBall.png";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const cx = bind(style);

function StartPage() {
  const navigate = useNavigate();

  return (
    <div className={cx(style.Wrapper)}>
      <img height={600} src={logo} alt="logo" />
      <img
        onClick={() => navigate("/main")}
        className={cx(style.MonsterBall)}
        src={ball}
        alt="pokeball"
      />
    </div>
  );
}

export default StartPage;
