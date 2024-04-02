import type { ComponentProps, ElementType, ReactNode, RefAttributes } from 'react'

import type { GlobalProps } from '@/types'
import type { HeadingStyles } from '@/heading/heading'

export type HeadingProps<T extends ElementType = 'h2'> = {
  component?: T
  children?: ReactNode
} & GlobalProps &
  ComponentProps<T> &
  RefAttributes<T> &
  HeadingStyles

declare module '@axolotl-ui/core' {
  export interface Components {
    Heading: HeadingProps
  }
}
