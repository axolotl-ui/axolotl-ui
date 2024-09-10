import assert from "assert";

import type { HSL } from "@/types/color";
import type { CSSHSL } from "@/types/css";

export const CSSHSL2HSL = (csshsl: CSSHSL): HSL => {
  const result = /hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/.exec(csshsl) as any;

  assert(result, "Invalid HSL string");

  const hue: number = Number.parseInt(result[1], 10);
  const saturation: number = Number.parseInt(result[2], 10);
  const lightness: number = Number.parseInt(result[3], 10);

  return { hue, saturation, lightness };
};

export const HSL2CSSHSL = (hsl: HSL): string => {
  const { hue, saturation, lightness } = hsl;

  return `hsl(${hue} ${saturation} ${lightness})`;
};

export const $ = HSL2CSSHSL;
