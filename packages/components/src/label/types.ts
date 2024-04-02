import type { ComponentProps, ElementType, ReactNode, RefAttributes } from 'react'

import type { GlobalProps } from '@/types'
import type { LabelStyles } from '@/label/label'

export type LabelProps<T extends ElementType = 'label'> = {
  component?: T
  children?: ReactNode
} & GlobalProps &
  ComponentProps<T> &
  RefAttributes<T> &
  LabelStyles

declare module '@axolotl-ui/core' {
  export interface Components {
    Label: LabelProps
  }
}
