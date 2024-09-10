"use client";

import type { ThemeVariant, UserThemeVariant } from "@/types/theme";

export const useTheme = (
  userTheme: UserThemeVariant = "system",
): ThemeVariant => {
  let theme: UserThemeVariant = userTheme;

  if (theme === "system") {
    if (typeof window !== "undefined") {
      theme = window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    } else {
      theme = "dark";
    }
  }

  return theme as ThemeVariant;
};

export const setHTMLTheme = (theme: ThemeVariant): void => {
  const _document = document || window.document;

  if (_document) {
    _document.documentElement.setAttribute("data-theme", theme);

    _document.documentElement.classList.remove("light", "dark");
    _document.documentElement.classList.add(theme);
  }
};
