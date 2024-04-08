import type { ComponentProps, ReactNode } from 'react'

import type { LabelStyles } from '@/label/label'
import type { GlobalProps } from '@/types'

export type LabelRef = HTMLLabelElement
export type LabelProps = {
  children?: ReactNode
  asChild?: boolean
} & GlobalProps &
  ComponentProps<'label'> &
  LabelStyles

declare module '@axolotl-ui/core' {
  export interface Components {
    Label: LabelProps
  }
}
