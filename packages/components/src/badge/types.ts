import type { ComponentProps, ReactNode } from 'react'

import type { GlobalComponentProps } from '@/types'

export type BadgeStyeProps = {
  variant?: 'solid' | 'off' | 'outlined'
  size?: 'default' | 'sm' | 'lg'
}

export type BadgeRef = HTMLSpanElement
export type BadgeProps = {
  children?: ReactNode
  asChild?: boolean
} & BadgeStyeProps &
  GlobalComponentProps &
  ComponentProps<'span'>

declare module '@axolotl-ui/core' {
  export interface Components {
    Badge?: BadgeProps
  }
}
