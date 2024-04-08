import type { ColorNames, HEX, HSL, LightnessLevel, RGB, Shades } from '@/types/color'
import type { ThemeColors } from '@/types/options'
import type { Optional } from '@/types/other'

export const HEXToRGB = (hex: HEX): RGB => {
  if (!/^#?[0-9A-Fa-f]{6}$/.test(hex)) {
    throw new Error('Invalid hex color format')
  }

  let red = 0,
    green = 0,
    blue = 0

  if (hex.length === 4) {
    red = parseInt(hex[1] + hex[1], 16)
    green = parseInt(hex[2] + hex[2], 16)
    blue = parseInt(hex[3] + hex[3], 16)
  } else if (hex.length === 7) {
    red = parseInt(hex[1] + hex[2], 16)
    green = parseInt(hex[3] + hex[4], 16)
    blue = parseInt(hex[5] + hex[6], 16)
  }

  return {
    red,
    green,
    blue
  }
}

export const RGBToHEX = (rgb: RGB): HEX => {
  if (Object.values(rgb).some((val) => val < 0 || val > 255)) {
    throw new Error('RGB values must be between 0 and 255')
  }

  const hex: string = [rgb.red, rgb.green, rgb.blue]
    .map((x: number) => x.toString(16).padStart(2, '0'))
    .join('')

  return `#${hex}`
}

export const HEXToHSL = (hex: HEX): HSL => {
  let { red, green, blue } = HEXToRGB(hex)

  red /= 255
  green /= 255
  blue /= 255

  const max: number = Math.max(red, green, blue)
  const min: number = Math.min(red, green, blue)

  let hue: number
  let saturation: number
  const lightness: number = (max + min) / 2

  if (max === min) {
    hue = saturation = 0 // Achromatic
  } else {
    const diff = max - min

    saturation = lightness > 0.5 ? diff / (2 - max - min) : diff / (max + min)

    switch (max) {
      case red:
        hue = (green - blue) / diff + (green < blue ? 6 : 0)
        break
      case green:
        hue = (blue - red) / diff + 2
        break
      case blue:
        hue = (red - green) / diff + 4
        break
      default:
        hue = 0
    }

    hue /= 6
  }

  return {
    hue: Math.round(360 * hue),
    saturation: Math.round(100 * saturation),
    lightness: Math.round(100 * lightness)
  }
}

export const HSLToHEX = (hsl: HSL): HEX => {
  if (
    hsl.hue < 0 ||
    hsl.hue > 360 ||
    hsl.saturation < 0 ||
    hsl.saturation > 100 ||
    hsl.lightness < 0 ||
    hsl.lightness > 100
  ) {
    throw new Error('HSL values are out of range')
  }

  const { hue }: HSL = hsl
  let { saturation, lightness }: HSL = hsl
  saturation /= 100
  lightness /= 100

  const a: number = saturation * Math.min(lightness, 1 - lightness)
  const f = (n: number): number => {
    const k = (n + hue / 30) % 12
    const color = lightness - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
  }

  return RGBToHEX({ red: f(0), green: f(8), blue: f(4) }) as HEX
}

export const RGBToP3 = (rgb: RGB): RGB => {
  return {
    red: rgb.red / 255,
    green: rgb.green / 255,
    blue: rgb.blue / 255
  }
}

export const lightnessLevels = [
  4, 7, 10, 13, 15, 18, 20, 30, 40, 50, 60, 70, 80, 83, 86, 89, 92, 95, 98
] as const

type ColorsHSl = {
  [key in ColorNames]: HSL
}

export const generateColorVariants = (colors: ThemeColors): Shades => {
  const colorsHSL: Partial<ColorsHSl> = {}

  ;(Object.keys(colors) as Array<ColorNames>).map((colorName: ColorNames) => {
    colorsHSL[colorName] = HEXToHSL(colors[colorName])
  })

  const shades: Optional<Shades> = {}

  ;(Object.keys(colorsHSL as ColorsHSl) as Array<ColorNames>).map((colorName: ColorNames) => {
    const color: HSL = (colorsHSL as ColorsHSl)[colorName]

    lightnessLevels.map((lightness: LightnessLevel) => {
      // TYPESCRIPT YOU ARE FUCKING STUPID
      if (!shades[colorName]) {
        shades[colorName] = {}
      }

      // @ts-expect-error fuck you
      shades[colorName][lightness] = HSLToHEX({
        ...color,
        lightness
      })
    })
  })

  return shades as Shades
}
