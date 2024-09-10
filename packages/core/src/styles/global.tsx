import React from "react";

import { Global } from "@emotion/react";
import { useThemeContext } from "@/contexts";
import { $ } from "@/utils/css";

export const GlobalStyles: React.FC = (): React.ReactNode => {
  const { theme } = useThemeContext();

  return (
    <Global
      styles={{
        "*": {
          margin: 0,
          padding: 0,

          font: "inherit",

          border: "none",
          outlineStyle: "none",

          appearance: "none",

          boxSizing: "border-box",

          scrollBehavior: "smooth",

          WebkitTapHighlightColor: "transparent",
          WebkitFontSmoothing: "antialiased",
        },

        html: {
          height: theme.sizes.full,
          width: theme.sizes.full,
        },

        ":root": {
          colorScheme: "light",
        },

        "html.dark": {
          colorScheme: "dark",
        },

        body: {
          height: theme.sizes.full,
          width: theme.sizes.full,

          lineHeight: 1.5,

          backgroundColor: $(theme.colors.primary.background),
          color: $(theme.colors.primary.on.background),

          transitionProperty: "color, background-color, border-color",
          transitionDuration: "300ms",
          transitionTimingFunction: "ease-in-out",
        },
      }}
    />
  );
};
