import type { ComponentProps, ReactNode } from 'react'

import type { ButtonStyles } from '@/button/button'
import type { GlobalProps } from '@/types'

export type ButtonRef = HTMLButtonElement
export type ButtonProps = {
  children?: ReactNode
  asChild?: boolean
  loading?: boolean
  loader?: ReactNode
  loaderPosition?: 'left' | 'right'
} & GlobalProps &
  ComponentProps<'button'> &
  ButtonStyles

declare module '@axolotl-ui/core' {
  export interface Components {
    Button: ButtonProps
  }
}
