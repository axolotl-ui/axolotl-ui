import type { ComponentProps, ReactNode } from 'react'

import type { GlobalComponentProps } from '@/types'

export type SeparatorStyleProps = {
  orientation?: 'horizontal' | 'vertical'
}

export type SeparatorRef = HTMLDivElement
export type SeparatorProps = {
  children?: ReactNode
} & SeparatorStyleProps &
  GlobalComponentProps &
  ComponentProps<'div'>

declare module '@axolotl-ui/core' {
  export interface Components {
    Separator?: SeparatorProps
  }
}
