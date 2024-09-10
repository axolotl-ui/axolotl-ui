import type { ComponentProps, ReactNode } from 'react'

import type { GlobalComponentProps } from '@/types'

export type TextRef = HTMLParagraphElement
export type TextProps = {
  children?: ReactNode
  asChild?: boolean
} & GlobalComponentProps &
  ComponentProps<'p'>

declare module '@axolotl-ui/core' {
  export interface Components {
    Text?: TextProps
  }
}
