import type { ComponentProps, ReactNode } from 'react'

import type { GlobalProps } from '@/types'
import type { MotionProps } from 'framer-motion'

export type OverlayRef = HTMLDivElement
export type OverlayProps = {
  children?: ReactNode
  open: boolean
  setOpen: (open: boolean) => void
} & GlobalProps &
  ComponentProps<'div'> &
  MotionProps

declare module '@axolotl-ui/core' {
  export interface Components {
    Overlay: OverlayProps
  }
}
