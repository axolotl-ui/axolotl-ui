import type { ComponentProps, ReactNode } from 'react'

import type { GlobalComponentProps } from '@/types'

export type BoxStyeProps = {
  variant?: 'solid' | 'outlined'
}

export type BoxRef = HTMLDivElement
export type BoxProps = {
  children?: ReactNode
  asChild?: boolean
} & BoxStyeProps &
  GlobalComponentProps &
  ComponentProps<'div'>

export type BoxContentProps = {
  children?: ReactNode
  asChild?: boolean
} & GlobalComponentProps &
  ComponentProps<'div'>

declare module '@axolotl-ui/core' {
  export interface Components {
    Box?: BoxProps
    BoxContent?: BoxContentProps
  }
}
