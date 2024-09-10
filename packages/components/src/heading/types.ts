import type { ComponentProps, ReactNode } from 'react'

import type { GlobalComponentProps } from '@/types'

export type HeadingStyeProps = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  separator?: boolean
}

export type HeadingRef = HTMLHeadingElement
export type HeadingProps = {
  children?: ReactNode
  asChild?: boolean
} & HeadingStyeProps &
  GlobalComponentProps &
  ComponentProps<'h1'>

declare module '@axolotl-ui/core' {
  export interface Components {
    Heading?: HeadingProps
  }
}
