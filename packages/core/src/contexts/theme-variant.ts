"use client";

import { createContext } from "@/hooks/create-context";

import type { ThemeVariant } from "@/types/theme";

export type ThemeVariantContextProps = {
  themeVariant: ThemeVariant;
  setThemeVariant: (themeVariant: ThemeVariant) => void;
};

export const [ThemeVariantProvider, useThemeVariantContext] =
  createContext<ThemeVariantContextProps>({
    name: "ThemeVariantContext",
    defaultValue: null,
  });
