import type { ComponentProps, ReactNode } from 'react'

import type { GlobalProps } from '@/types'
import type { BadgeStyles } from '@/badge/badge'

export type BadgeRef = HTMLSpanElement
export type BadgeProps = {
  children?: ReactNode
  asChild?: boolean
} & GlobalProps &
  ComponentProps<'span'> &
  BadgeStyles

declare module '@axolotl-ui/core' {
  export interface Components {
    Badge: BadgeProps
  }
}
