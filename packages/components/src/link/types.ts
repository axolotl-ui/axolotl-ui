import type { ComponentProps, ElementType, ReactNode, RefAttributes } from 'react'

import type { GlobalProps } from '@/types'
import type { LinkStyles } from '@/link/link'

export type LinkProps<T extends ElementType = 'a'> = {
  component?: T
  children?: ReactNode
} & GlobalProps &
  ComponentProps<T> &
  RefAttributes<T> &
  LinkStyles

declare module '@axolotl-ui/core' {
  export interface Components {
    Link: LinkProps
  }
}
