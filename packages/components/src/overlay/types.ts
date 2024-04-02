import type { ComponentProps, ReactNode, RefAttributes } from 'react'

import type { GlobalProps } from '@/types'
import type { MotionProps } from 'framer-motion'

export type OverlayProps = {
  children?: ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
} & GlobalProps &
  ComponentProps<'div'> &
  RefAttributes<'div'> &
  MotionProps

declare module '@axolotl-ui/core' {
  export interface Components {
    Overlay: OverlayProps
  }
}
