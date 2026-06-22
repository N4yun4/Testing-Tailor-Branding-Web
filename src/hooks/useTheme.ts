import { useCallback, useEffect, useState } from "react";

type Theme = "dark" | "light";
const STORE_KEY = "noctra-theme";

function readStored(): Theme | null {
  try {
    const v = localStorage.getItem(STORE_KEY);
    return v === "dark" || v === "light" ? v : null;
  } catch {
    return null;
  }
}

function currentAttr(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

/**
 * Theme is resolved from the OS by default (set pre-paint in index.html),
 * persisted in localStorage only once the visitor makes an explicit choice,
 * and keeps following the OS while no choice has been stored.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    typeof document === "undefined" ? "dark" : currentAttr(),
  );

  const apply = useCallback((next: Theme, persist: boolean) => {
    document.documentElement.setAttribute("data-theme", next);
    setTheme(next);
    if (persist) {
      try {
        localStorage.setItem(STORE_KEY, next);
      } catch {
        /* storage unavailable — keep the in-memory choice */
      }
    }
  }, []);

  const toggle = useCallback(() => {
    apply(currentAttr() === "light" ? "dark" : "light", true);
  }, [apply]);

  // Follow the OS while the visitor hasn't chosen explicitly.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = (e: MediaQueryListEvent) => {
      if (!readStored()) apply(e.matches ? "light" : "dark", false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [apply]);

  return { theme, toggle };
}
