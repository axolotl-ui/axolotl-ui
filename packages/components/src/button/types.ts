import type { ComponentProps, ReactNode } from 'react'

import type { GlobalComponentProps } from '@/types'

export type ButtonStyeProps = {
  variant?: 'solid' | 'off' | 'outlined' | 'ghost' | 'text'
  size?: 'default' | 'sm' | 'lg' | 'round'
}

export type ButtonRef = HTMLButtonElement
export type ButtonProps = {
  children?: ReactNode
  asChild?: boolean
} & ButtonStyeProps &
  GlobalComponentProps &
  ComponentProps<'button'>

declare module '@axolotl-ui/core' {
  export interface Components {
    Button?: ButtonProps
  }
}
