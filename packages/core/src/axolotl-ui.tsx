"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";

import {
  CacheProvider,
  ThemeProvider as EmotionThemeProvider,
} from "@emotion/react";
import createCache, { type EmotionCache } from "@emotion/cache";

import { createTheme } from "@/utils/create-theme";
import { setHTMLTheme, useTheme } from "@/hooks/use-theme-variant";

import { ThemeProvider } from "@/contexts/theme";
import { ThemeVariantProvider } from "@/contexts/theme-variant";

import { GlobalStyles } from "@/styles/global";

import type { Theme, ThemeCSSFields, ThemeVariant } from "@/types/theme";

export type AxolotlUIProps = {
  children: React.ReactNode;
  theme?: Theme;
  cache?: any;
};

export const AxolotlUI: React.FC<AxolotlUIProps> = ({
  children,
  theme: userTheme,
}: AxolotlUIProps): React.ReactNode => {
  const [themeVariant, _setThemeVariant] = useState<ThemeVariant>(
    useTheme(userTheme?.theme),
  );

  const setThemeVariant = (themeVariant: ThemeVariant) => {
    setHTMLTheme(themeVariant);

    _setThemeVariant(themeVariant);
  };

  const [theme, setTheme] = useState<Theme>(createTheme({}));

  useEffect(() => {
    setThemeVariant(useTheme(userTheme?.theme));

    setTheme(createTheme({ ...userTheme }, themeVariant));
  }, []);

  useLayoutEffect(() => {
    setTheme(createTheme({ ...userTheme }, themeVariant));
  }, [themeVariant]);

  useLayoutEffect(() => {
    setThemeVariant(useTheme(theme.theme));
  }, [theme.theme]);

  const [cache] = useState<EmotionCache>(() => createCache({ key: "axolotl" }));

  return (
    <CacheProvider value={cache}>
      <ThemeVariantProvider
        value={{
          themeVariant,
          setThemeVariant,
        }}
      >
        <ThemeProvider
          value={{
            theme,
            setTheme,
          }}
        >
          <GlobalStyles />

          {children}
        </ThemeProvider>
      </ThemeVariantProvider>
    </CacheProvider>
  );
};
