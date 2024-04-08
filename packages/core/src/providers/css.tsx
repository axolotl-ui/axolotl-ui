'use client'

import React, { useEffect } from 'react'

import { useOptions } from '@/contexts/options'
import { HEXToRGB, RGBToP3, generateColorVariants } from '@/utils/color'

import type { ColorNames, LightnessLevel } from '@/types/color'
import type { Options } from '@/types/options'

export type CSSVariablesProviderProps = {
  children: React.ReactNode
}

type Variable = `--${string}`

type Styles = {
  [key in Variable]: string
}

const getStyles = (options: Options): Styles => {
  const colors = options.extend.generatedColors

  return Object.assign(
    {},
    ...(Object.keys(options.extend.generatedColors) as Array<ColorNames>).flatMap(
      (colorName: ColorNames) => {
        return (Object.keys(colors[colorName]) as unknown as Array<LightnessLevel>).map(
          (lightness: LightnessLevel): { [key: Variable]: string } => {
            const rgb = HEXToRGB(colors[colorName][lightness])
            const { red, green, blue } = RGBToP3(rgb)

            return {
              [`--${colorName}-${lightness}`]: `color(display-p3 ${red.toFixed(6)} ${green.toFixed(6)} ${blue.toFixed(6)})`
            }
          }
        )
      }
    ),
    {
      '--radius-base': options.extend.radius
    }
  )
}

const setStyles = (options: Options) => {
  const styles = getStyles(options)

  ;(Object.keys(styles) as Array<keyof Styles>).map((name: Variable) => {
    ;(document || window.document).documentElement.style.setProperty(name, styles[name])
  })
}

export const CSSVariablesProvider: React.FC<CSSVariablesProviderProps> = ({
  children
}: CSSVariablesProviderProps): React.ReactNode => {
  const { options } = useOptions()

  useEffect(() => {
    setStyles(options)
  }, [options])

  useEffect(() => {
    options.extend.generatedColors = generateColorVariants(options.extend.colors)

    setStyles(options)
  }, [options.extend.colors])

  return children
}
