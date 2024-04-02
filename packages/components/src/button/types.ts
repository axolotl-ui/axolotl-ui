import type { ComponentProps, ReactNode } from 'react'

import type { GlobalProps } from '@/types'
import type { ButtonStyles } from '@/button/button'

export type ButtonProps = {
  children?: ReactNode
  asChild?: boolean
  loading?: boolean
  loader?: ReactNode
  loaderPosition?: 'left' | 'right'
} & GlobalProps &
  ComponentProps<'button'> &
  ButtonStyles

export type ButtonRef = HTMLButtonElement

declare module '@axolotl-ui/core' {
  export interface Components {
    Button: ButtonProps
  }
}
