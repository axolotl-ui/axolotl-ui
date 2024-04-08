import type { ComponentProps, ReactNode } from 'react'

import type { HeadingStyles } from '@/heading/heading'
import type { GlobalProps } from '@/types'

export type HeadingRef = HTMLHeadingElement
export type HeadingProps = {
  children?: ReactNode
  asChild?: boolean
} & GlobalProps &
  ComponentProps<'h1'> &
  HeadingStyles

declare module '@axolotl-ui/core' {
  export interface Components {
    Heading: HeadingProps
  }
}
