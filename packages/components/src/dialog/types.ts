import type { ComponentProps, ReactNode } from 'react'

import type { ButtonProps, ButtonRef } from '@/button/types'
import type { GlobalProps } from '@/types'
import type { MotionProps } from 'framer-motion'

export type DialogProps = {
  children?: ReactNode
  initial?: boolean
  open?: boolean
  setOpen?: (open: boolean) => void
}

export type DialogContentRef = HTMLDivElement
export type DialogContentProps = {
  children?: ReactNode
} & GlobalProps &
  ComponentProps<'div'> &
  MotionProps

export type DialogTriggerRef = ButtonRef
export type DialogTriggerProps = ButtonProps

declare module '@axolotl-ui/core' {
  export interface Components {
    Dialog: DialogProps
    DialogContent: DialogContentProps
    DialogTrigger: DialogTriggerProps
  }
}
