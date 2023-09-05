import { useRef } from "react";
import useScrollInView from "../../../hooks/useScrollInView";

function InfinityScrollTrigger({
  callback,
  enabled = true,
  options = {},
}: {
  callback: () => void;
  enabled?: boolean;
  options?: IntersectionObserverInit;
}) {
  const reference = useRef<HTMLDivElement | null>(null);
  useScrollInView(reference, callback, enabled, options);

  return <div ref={reference}></div>;
}

export default InfinityScrollTrigger;
