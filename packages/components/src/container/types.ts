import type { ComponentProps, ReactNode } from 'react'

import type { GlobalProps } from '@/types'

export type ContainerRef = HTMLDivElement
export type ContainerProps = {
  children?: ReactNode
  asChild?: boolean
} & GlobalProps &
  ComponentProps<'div'>

declare module '@axolotl-ui/core' {
  export interface Components {
    Container: ContainerProps
  }
}
