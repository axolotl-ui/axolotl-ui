import type { ComponentProps, ElementType, ReactNode, RefAttributes } from 'react'

import type { GlobalProps } from '@/types'
import type { TextStyles } from '@/text/text'

export type TextProps<T extends ElementType = 'p'> = {
  component?: T
  children?: ReactNode
} & GlobalProps &
  ComponentProps<T> &
  RefAttributes<T> &
  TextStyles

declare module '@axolotl-ui/core' {
  export interface Components {
    Text: TextProps
  }
}
