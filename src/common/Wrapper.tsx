import type { ReactNode } from "react";

interface ElementProps {
  children: ReactNode;
}

function Wrapper({ children }: ElementProps) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {children}
    </div>
  );
}

export default Wrapper;
