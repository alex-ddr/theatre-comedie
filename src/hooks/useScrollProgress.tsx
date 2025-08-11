// [TheatreDynamic] #3
import { createContext, useContext, useEffect, useState } from "react";
const Ctx = createContext(0);
export function ScrollProgressProvider({ children }: { children: React.ReactNode }) {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const v = max > 0 ? h.scrollTop / max : 0;
      setP(v);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <Ctx.Provider value={p}>{children}</Ctx.Provider>;
}
export const useScrollProgress = () => useContext(Ctx);
