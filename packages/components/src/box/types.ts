import type { ComponentProps, ReactNode } from 'react'

import type { GlobalProps } from '@/types'
import type { BoxStyles } from '@/box/box'

export type BoxRef = HTMLDivElement
export type BoxProps = {
  children?: ReactNode
  asChild?: boolean
} & GlobalProps &
  ComponentProps<'div'> &
  BoxStyles

export type BoxContentRef = BoxRef
export type BoxContentProps = BoxProps

declare module '@axolotl-ui/core' {
  export interface Components {
    Box: BoxProps
    BoxContent: BoxContentProps
  }
}
