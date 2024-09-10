import type { ComponentProps, ReactNode } from 'react'

import type { GlobalComponentProps } from '@/types'

export type LabelRef = HTMLLabelElement
export type LabelProps = {
  children?: ReactNode
  asChild?: boolean
} & GlobalComponentProps &
  ComponentProps<'label'>

declare module '@axolotl-ui/core' {
  export interface Components {
    Label?: LabelProps
  }
}
