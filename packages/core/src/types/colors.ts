import type { Range } from "@/types/other";
import type { HSL } from "@/types/color";

export type LightnessValue = Range<101>;
export type LightnessValuesArray = LightnessValue[];

export type ColorScheme =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "success"
  | "info";
export type ColorSchemesArray = ColorScheme[];

export type ColorName =
  | "background"
  | "container"
  | "off"
  | "vibrant"
  | "border"
  | "hover"
  | "on";
export type ColorNamesArray = ColorName[];

export type Colors = {
  background: HSL;
  container: HSL;
  off: HSL;
  vibrant: HSL;
  border: HSL;

  hover: Omit<Colors, "on" | "hover">;
  on: Omit<Colors, "on">;
};

export type ColorSchemeColorVariants = {
  [key in ColorScheme]: Colors;
};

export type ThemeColorVariants = {
  light: Colors;
  dark: Colors;
};

export type ThemeColorSchemeVariants = {
  light: ColorSchemeColorVariants;
  dark: ColorSchemeColorVariants;
};

export type RawColors = {
  [key in LightnessValue]: HSL;
};
