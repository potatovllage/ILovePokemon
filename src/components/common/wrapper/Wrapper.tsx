import type { ReactNode } from "react";
import style from "./style.module.scss";
import bind from "../../../styles/cx";

interface ElementProps {
  children: ReactNode;
}

const cx = bind(style);

function Wrapper({ children }: ElementProps) {
  return <div className={cx(style.Wrapper)}>{children}</div>;
}

export default Wrapper;
