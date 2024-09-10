import type { ComponentProps, ReactNode } from 'react'

import type { GlobalComponentProps } from '@/types'

export type LinkRef = HTMLParagraphElement
export type LinkProps = {
  children?: ReactNode
  asChild?: boolean
} & GlobalComponentProps &
  ComponentProps<'p'>

declare module '@axolotl-ui/core' {
  export interface Components {
    Link?: LinkProps
  }
}
