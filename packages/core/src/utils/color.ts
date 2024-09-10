import assert from "assert";

import type { HEX, HSL, RGB } from "@/types/color";

export const HEX2RGB = (hex: HEX): RGB => {
  assert(/^#?[0-9A-Fa-f]{6}$/.test(hex), "Invalid hex color format");

  let red = 0;
  let green = 0;
  let blue = 0;

  if (hex.length === 4) {
    red = Number.parseInt(hex[1] + hex[1], 16);
    green = Number.parseInt(hex[2] + hex[2], 16);
    blue = Number.parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    red = Number.parseInt(hex[1] + hex[2], 16);
    green = Number.parseInt(hex[3] + hex[4], 16);
    blue = Number.parseInt(hex[5] + hex[6], 16);
  }

  return {
    red,
    green,
    blue,
  };
};

export const RGB2HEX = (rgb: RGB): HEX => {
  assert(
    Object.values(rgb).every((val: number) => val >= 0 && val <= 255),
    "RGB values must be between 0 and 255",
  );

  const hex: string = Object.keys(rgb)
    /* @ts-ignore */
    .map((value: keyof RGB): string => rgb[value].toString(16).padStart(2, "0"))
    .join("");

  return `#${hex}`;
};

export const HEX2HSL = (hex: HEX): HSL => {
  let { red, green, blue } = HEX2RGB(hex);

  red /= 255;
  green /= 255;
  blue /= 255;

  const max: number = Math.max(red, green, blue);
  const min: number = Math.min(red, green, blue);

  let hue: number;
  let saturation: number;
  const lightness: number = (max + min) / 2;

  if (max === min) {
    hue = saturation = 0; // Achromatic
  } else {
    const diff: number = max - min;

    saturation = lightness > 0.5 ? diff / (2 - max - min) : diff / (max + min);

    switch (max) {
      case red:
        hue = (green - blue) / diff + (green < blue ? 6 : 0);
        break;
      case green:
        hue = (blue - red) / diff + 2;
        break;
      case blue:
        hue = (red - green) / diff + 4;
        break;
      default:
        hue = 0;
    }

    hue /= 6;
  }

  return {
    hue: Math.round(360 * hue),
    saturation: Math.round(100 * saturation),
    lightness: Math.round(100 * lightness),
  };
};

export const HSL2HEX = (hsl: HSL): HEX => {
  assert(hsl.hue >= 0 && hsl.hue <= 360, "Hue must be between 0 and 360");
  assert(
    hsl.saturation >= 0 && hsl.saturation <= 100,
    "Saturation must be between 0 and 100",
  );
  assert(
    hsl.lightness >= 0 && hsl.lightness <= 100,
    "Lightness must be between 0 and 100",
  );

  const { hue }: HSL = hsl;
  let { saturation, lightness }: HSL = hsl;
  saturation /= 100;
  lightness /= 100;

  const a: number = saturation * Math.min(lightness, 1 - lightness);
  const f = (n: number): number => {
    const k: number = (n + hue / 30) % 12;
    const color: number =
      lightness - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color);
  };

  return RGB2HEX({ red: f(0), green: f(8), blue: f(4) }) as HEX;
};

export const blendHSL = (
  hsl1: HSL,
  hsl2: HSL,
  ratio: number,
  lightness?: number,
): HSL => {
  assert(hsl1.hue >= 0 && hsl1.hue <= 360, "Hue must be between 0 and 360");
  assert(
    hsl1.saturation >= 0 && hsl1.saturation <= 100,
    "Saturation must be between 0 and 100",
  );
  assert(
    hsl1.lightness >= 0 && hsl1.lightness <= 100,
    "Lightness must be between 0 and 100",
  );

  assert(hsl2.hue >= 0 && hsl2.hue <= 360, "Hue must be between 0 and 360");
  assert(
    hsl2.saturation >= 0 && hsl2.saturation <= 100,
    "Saturation must be between 0 and 100",
  );

  const { hue: h1, saturation: s1 } = hsl1;
  const { hue: h2, saturation: s2 } = hsl2;

  const hue: number = h1 + (h2 - h1) * ratio;
  const saturation: number = s1 + (s2 - s1) * ratio;

  return { hue, saturation, lightness: lightness || hsl1.lightness };
};
