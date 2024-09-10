import type { ComponentProps, ReactNode } from 'react'

import type { GlobalComponentProps } from '@/types'

export type ContainerRef = HTMLDivElement
export type ContainerProps = {
  children?: ReactNode
  asChild?: boolean
} & GlobalComponentProps &
  ComponentProps<'div'>

declare module '@axolotl-ui/core' {
  export interface Components {
    Container?: ContainerProps
  }
}
