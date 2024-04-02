import type { ComponentProps, ElementType } from 'react'

import type { HEX, Shades } from '@/types/color'

export type Theme = 'dark' | 'light' | 'system'

export interface Components {
  all: ComponentProps<ElementType>
}

export type OtherOptions = {
  /**
   * *EXPERIMENTAL*
   *
   * When true, AxolotlUI will generate the colors from the accent color
   *
   * Some colors might not look good
   *
   * @default true
   */
  generateColorsFromAcccentColor: boolean
}

export type ThemeColors = {
  /**
   * Main accent color. Will be used on 90% of the UI
   */
  accent1: HEX

  /**
   * Second accent color. Will be used on 10% of the UI to bring more joy
   */
  accent2: HEX

  /**
   * Neutral color
   */
  neutral: HEX

  /**
   * Error
   */
  error: HEX

  /**
   * Success
   */
  success: HEX

  /**
   * Warn
   */
  warn: HEX

  /**
   * Info
   */
  info: HEX
}

export type Extend = {
  /**
   * Border radius that'll be used
   *
   * @default '0.5rem'
   */
  radius: string | number

  /**
   * Sets the default props for the components
   *
   * @example
   * ```javascript
   * components: {
   *  Button: {
   *    className: 'abc xyz',
   *    disabled: true
   *  }
   * }
   * ```
   *
   * @default {}
   */
  components: Components

  /**
   * Colors that will be used globally
   */
  colors: ThemeColors

  generatedColors: Shades
}

export type Options = {
  /**
   * Theme
   *
   * @default 'system'
   */
  theme: Theme

  /**
   * Other options
   */
  other: OtherOptions

  /**
   * Extend the default options
   */
  extend: Extend
}
