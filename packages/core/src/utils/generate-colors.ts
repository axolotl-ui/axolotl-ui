import { blendHSL, HEX2HSL } from "@/utils/color";

import type {
  ColorNamesArray,
  Colors,
  ColorScheme,
  ColorSchemeColorVariants,
  ColorSchemesArray,
  LightnessValue,
  LightnessValuesArray,
  RawColors,
  ThemeColorSchemeVariants,
  ThemeColorVariants,
} from "@/types/colors";
import type { HEX, HSL } from "@/types/color";
import type { BaseColors, ThemeVariant } from "@/types/theme";

type ColorSchemeRawColorsMap = {
  [key in ColorScheme]: RawColors;
};

export const lightnessValues: LightnessValuesArray = Array.from(
  { length: 101 },
  (_, index) => index,
) as LightnessValuesArray;

export const colorSchemes: ColorSchemesArray = [
  "primary",
  "secondary",
  "error",
  "warning",
  "success",
  "info",
];

export const colorNames: ColorNamesArray = [
  "background",
  "container",
  "off",
  "vibrant",
  "border",
  "hover",
  "on",
];

export const generateRawColors = (
  baseColors: BaseColors,
): ColorSchemeRawColorsMap => {
  const rawColors: ColorSchemeRawColorsMap = <ColorSchemeRawColorsMap>{};

  colorSchemes.map((colorScheme: ColorScheme): void => {
    rawColors[colorScheme] = <RawColors>{};

    lightnessValues.map((lightness: LightnessValue): void => {
      let baseColor: HSL | HEX = baseColors[colorScheme];

      if (typeof baseColor === "string") {
        baseColor = HEX2HSL(baseColor);
      }

      rawColors[colorScheme][lightness] = {
        hue: baseColor.hue,
        lightness,
        saturation: baseColor.saturation,
      };
    });
  });

  return rawColors;
};

export const generateColorVariants = (
  rawColors: RawColors,
  backgroundColor: HSL,
): ThemeColorVariants => {
  const lightColors: Colors = {
    background: blendHSL(rawColors["97"], backgroundColor, 0.5),
    container: blendHSL(rawColors["92"], backgroundColor, 0.75),
    off: blendHSL(rawColors["80"], backgroundColor, 0.75),
    vibrant: rawColors["50"],
    border: {
      ...backgroundColor,
      lightness: 75,
    },
    on: {
      background: blendHSL(rawColors["3"], backgroundColor, 0.5),
      container: blendHSL(rawColors["8"], backgroundColor, 0.75),
      off: blendHSL(rawColors["20"], backgroundColor, 0.75),
      vibrant: rawColors["100"],
      hover: {
        background: blendHSL(rawColors["0"], backgroundColor, 0.5),
        container: blendHSL(rawColors["3"], backgroundColor, 0.75),
        off: blendHSL(rawColors["15"], backgroundColor, 0.75),
        vibrant: rawColors["95"],
      },
    },
    hover: {
      background: blendHSL(rawColors["92"], backgroundColor, 0.5),
      container: blendHSL(rawColors["87"], backgroundColor, 0.75),
      off: blendHSL(rawColors["75"], backgroundColor, 0.75),
      vibrant: rawColors["45"],
      border: {
        ...backgroundColor,
        lightness: 70,
      },
    },
  } as Colors;

  const darkColors: Colors = {
    background: blendHSL(rawColors["3"], backgroundColor, 0.5),
    container: blendHSL(rawColors["8"], backgroundColor, 0.75),
    off: blendHSL(rawColors["20"], backgroundColor, 0.75),
    vibrant: rawColors["50"],
    border: {
      ...backgroundColor,
      lightness: 25,
    },
    on: {
      background: blendHSL(rawColors["97"], backgroundColor, 0.5),
      container: blendHSL(rawColors["92"], backgroundColor, 0.75),
      off: blendHSL(rawColors["80"], backgroundColor, 0.75),
      vibrant: rawColors["100"],
      hover: {
        background: blendHSL(rawColors["100"], backgroundColor, 0.5),
        container: blendHSL(rawColors["97"], backgroundColor, 0.75),
        off: blendHSL(rawColors["85"], backgroundColor, 0.75),
        vibrant: rawColors["95"],
      },
    },
    hover: {
      background: blendHSL(rawColors["8"], backgroundColor, 0.5),
      container: blendHSL(rawColors["13"], backgroundColor, 0.75),
      off: blendHSL(rawColors["25"], backgroundColor, 0.75),
      vibrant: rawColors["45"],
      border: {
        ...backgroundColor,
        lightness: 30,
      },
    },
  } as Colors;

  return {
    light: lightColors,
    dark: darkColors,
  };
};

export const generateColors = (
  baseColors: BaseColors,
  theme: ThemeVariant,
): {
  rawColors: ColorSchemeRawColorsMap;
  colors: ColorSchemeColorVariants;
} => {
  const rawColors: ColorSchemeRawColorsMap = generateRawColors(baseColors);

  const colors = <ThemeColorSchemeVariants>{
    light: {},
    dark: {},
  };

  colorSchemes.map((colorScheme: ColorScheme): void => {
    const _colors: ThemeColorVariants = generateColorVariants(
      rawColors[colorScheme],
      typeof baseColors.background === "string"
        ? HEX2HSL(baseColors.background)
        : baseColors.background,
    );

    colors.light[colorScheme] = _colors.light;
    colors.dark[colorScheme] = _colors.dark;
  });

  return {
    rawColors,
    colors: colors[theme],
  };
};
