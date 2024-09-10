import type { ComponentProps, ReactNode } from 'react'

import type { GlobalComponentProps } from '@/types'

export type TagStyeProps = {
  variant?: 'solid' | 'off' | 'outlined'
  size?: 'default' | 'sm' | 'lg'
}

export type TagRef = HTMLSpanElement
export type TagProps = {
  children?: ReactNode
  asChild?: boolean
} & TagStyeProps &
  GlobalComponentProps &
  ComponentProps<'span'>

declare module '@axolotl-ui/core' {
  export interface Components {
    Tag?: TagProps
  }
}
