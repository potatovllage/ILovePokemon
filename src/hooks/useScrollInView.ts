import { useEffect } from "react";
import type { MutableRefObject } from "react";

export default function useScrollInView(
  reference: MutableRefObject<HTMLDivElement | null>,
  callback: () => void,
  enabled: boolean,
  options: IntersectionObserverInit
) {
  const element = reference.current;

  useEffect(() => {
    if (!element || !enabled) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);
    observer.observe(element);

    return () => observer.disconnect();
  }, [callback, options, enabled, element]);
}
