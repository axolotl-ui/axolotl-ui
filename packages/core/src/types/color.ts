import { lightnessLevels } from '@/utils/color'
import type { ThemeColors } from '@/types/options'

export type RGB = {
  red: number
  green: number
  blue: number
}

export type HSL = {
  hue: number
  saturation: number
  lightness: number
}

export type HEX = `#${string}`

export type LightnessLevel = (typeof lightnessLevels)[number]

export type Colors = Record<LightnessLevel, HEX>

export type ColorNames = keyof ThemeColors

export type Shades = { [key in ColorNames]: Colors }
