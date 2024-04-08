import type { ComponentProps, ReactNode } from 'react'

import type { SeparatorStyles } from '@/separator/separator'
import type { GlobalProps } from '@/types'

export type SeparatorRef = HTMLDivElement
export type SeparatorProps = {
  children?: ReactNode
  asChild?: boolean
} & GlobalProps &
  ComponentProps<'div'> &
  SeparatorStyles

declare module '@axolotl-ui/core' {
  export interface Components {
    Separator: SeparatorProps
  }
}
