import type { ComponentProps, ReactNode } from 'react'

import type { TextStyles } from '@/text/text'
import type { GlobalProps } from '@/types'

export type TextRef = HTMLParagraphElement
export type TextProps = {
  children?: ReactNode
  asChild?: boolean
} & GlobalProps &
  ComponentProps<'p'> &
  TextStyles

declare module '@axolotl-ui/core' {
  export interface Components {
    Text: TextProps
  }
}
