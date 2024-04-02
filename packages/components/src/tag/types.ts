import type { ComponentProps, ElementType, ReactNode, RefAttributes } from 'react'

import type { GlobalProps } from '@/types'
import type { TagStyles } from '@/tag/tag'

export type TagProps<T extends ElementType = 'span'> = {
  component?: T
  children?: ReactNode
} & GlobalProps &
  ComponentProps<T> &
  RefAttributes<T> &
  TagStyles

declare module '@axolotl-ui/core' {
  export interface Components {
    Tag: TagProps
  }
}
