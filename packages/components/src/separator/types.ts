import type { ComponentProps, ElementType, ReactNode, RefAttributes } from 'react'

import type { GlobalProps } from '@/types'
import type { SeparatorStyles } from '@/separator/separator'

export type SeparatorProps<T extends ElementType = 'div'> = {
  component?: T
  children: ReactNode
} & GlobalProps &
  ComponentProps<T> &
  RefAttributes<T> &
  SeparatorStyles

declare module '@axolotl-ui/core' {
  export interface Components {
    Separator: SeparatorProps
  }
}
