import type { ComponentProps, ReactNode } from 'react'

import type { GlobalComponentProps } from '@/types'

export type FlexRef = HTMLDivElement
export type FlexProps = {
  children?: ReactNode
  asChild?: boolean
} & GlobalComponentProps &
  ComponentProps<'div'>

declare module '@axolotl-ui/core' {
  export interface Components {
    Flex?: FlexProps
  }
}
