import type { Optional } from "@/types/other";
import type {
  BaseColors,
  BorderWidths,
  Components,
  FontSizes,
  FontWeights,
  MediaQueries,
  Radii,
  Sizes,
  Theme,
  ThemeCSSFieldsArray,
  ThemeVariant,
  UserThemeVariant,
} from "@/types/theme";
import { generateColors } from "@/utils/generate-colors";
import { useTheme } from "@/hooks/use-theme-variant";

export const themeCSSFields: ThemeCSSFieldsArray = [
  "colors",
  "sizes",
  "radii",
  "fontSizes",
  "fontWeights",
  "borderWidths",
  "mediaQueries",
];

export const createTheme = (
  theme: Optional<Theme>,
  _themeVariant?: UserThemeVariant,
): Theme => {
  const themeVariant: UserThemeVariant = useTheme(_themeVariant);

  const baseColors: BaseColors = {
    background: theme?.baseColors?.background || "#0b0a0e",
    primary: theme?.baseColors?.primary || "#be123c",
    secondary: theme?.baseColors?.secondary || "#a21caf",
    error: theme?.baseColors?.error || "#b91c1c",
    warning: theme?.baseColors?.warning || "#ca8a04",
    success: theme?.baseColors?.success || "#15803d",
    info: theme?.baseColors?.info || "#1d4ed8",
    ...theme?.baseColors,
  };

  const components: Components = {
    all: theme?.components?.all || {},
  };

  const colors = generateColors(baseColors, themeVariant);

  const sizes: Sizes = {
    full: "100%",
    0.25: "0.0625rem",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    16: "4rem",
    ...theme?.sizes,
  };

  const radii: Radii = {
    sm: "0.125rem",
    default: "0.25rem",
    md: "0.375rem",
    lg: "0.50rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
    ...theme?.radii,
  };

  const fontSizes: FontSizes = {
    xs: "0.75rem",
    sm: "0.875rem",
    default: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    ...theme?.fontSizes,
  };

  const fontWeights: FontWeights = {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
    ...theme?.fontWeights,
  };

  const borderWidths: BorderWidths = {
    default: "1px",
    thicc: "2px",
    ...theme?.borderWidths,
  };

  const mediaQueries: MediaQueries = {
    sm: "(min-width: 680px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    ...theme?.mediaQueries,
  };

  return {
    theme: themeVariant,
    baseColors,
    colors: colors.colors,
    components,
    sizes,
    radii,
    fontSizes,
    fontWeights,
    borderWidths,
    mediaQueries,
  };
};
