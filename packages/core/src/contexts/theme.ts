"use client";

import { createContext } from "@/hooks/create-context";

import type { Theme } from "@/types/theme";
import { createTheme } from "@/utils";

export type ThemeContextProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const [ThemeProvider, useThemeContext] =
  createContext<ThemeContextProps>({
    name: "ThemeContext",
    defaultValue: { theme: createTheme({}), setTheme: () => {} },
  });
