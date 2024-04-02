import { generateColorVariants } from '@/utils/color'

import type { Options, OtherOptions } from '@/types/options'
import type { HEX } from '@/types/color'
import type { Optional } from '@/types/other'

export const generateOptions = (opts?: Optional<Options>): Options => {
  let options: Optional<Options> = opts || {}

  const accent1: HEX = options?.extend?.colors?.accent1 || '#ea580c'
  const accent2: HEX = options?.extend?.colors?.accent2 || '#e11d48'
  const neutral: HEX = options?.extend?.colors?.info || '#737373'
  const error: HEX = options?.extend?.colors?.error || '#ef4444'
  const warn: HEX = options?.extend?.colors?.warn || '#f97316'
  const success: HEX = options?.extend?.colors?.success || '#34d399'
  const info: HEX = options?.extend?.colors?.info || '#2563eb'

  const colors = {
    accent1,
    accent2,
    neutral,
    error,
    warn,
    success,
    info
  }

  const other: OtherOptions = {
    generateColorsFromAcccentColor: true,
    ...(options?.other || {})
  }

  options = {
    theme: options?.theme || 'system',

    other,

    extend: {
      radius: options?.extend?.radius || '1rem',
      components: options?.extend?.components || {},
      colors,
      generatedColors: {
        ...generateColorVariants(colors),
        ...(options?.extend?.generatedColors || {})
      }
    }
  } as Options

  return options as Options
}
