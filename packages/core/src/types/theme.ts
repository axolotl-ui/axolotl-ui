import type { ColorScheme, ColorSchemeColorVariants } from "@/types/colors";
import type { HEX, HSL } from "@/types/color";

export type ThemeVariant = "dark" | "light";
export type UserThemeVariant = ThemeVariant | "system";

export type BaseColors = {
  background: HEX | HSL;
} & {
  [key in ColorScheme]: HEX | HSL;
};

export interface Components {
  [key: string]: any;
}

export type ThemeCSSFields =
  | "colors"
  | "sizes"
  | "radii"
  | "fontSizes"
  | "fontWeights"
  | "borderWidths"
  | "mediaQueries";
export type ThemeCSSFieldsArray = ThemeCSSFields[];

export type Sizes = {
  [key: number | string]: number | string;
};

export type Radii = Sizes;

export type FontSizes = Sizes;

export type FontWeights = Sizes;

export type BorderWidths = Sizes;

export type MediaQueries = Sizes;

export type ThemeCSSFieldsMap = {
  colors: ColorSchemeColorVariants;
  sizes: Sizes;
  radii: Radii;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  borderWidths: BorderWidths;
  mediaQueries: MediaQueries;
};

export type Theme = {
  theme: UserThemeVariant;
  baseColors: BaseColors;
  components: Components;
} & ThemeCSSFieldsMap;
