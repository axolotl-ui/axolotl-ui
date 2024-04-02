import type { ComponentProps, ReactNode } from 'react'

import type { GlobalProps } from '@/types'
import type { BadgeStyles } from '@/badge/badge'

export type BadgeProps = {
  children?: ReactNode
  asChild?: boolean
} & GlobalProps &
  ComponentProps<'span'> &
  BadgeStyles

export type BadgeRef = HTMLSpanElement

declare module '@axolotl-ui/core' {
  export interface Components {
    Badge: BadgeProps
  }
}
