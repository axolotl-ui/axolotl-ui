import type { ComponentProps, ElementType, ReactNode, Ref } from 'react'

import type { ButtonProps } from '@/button/types'
import type { GlobalProps } from '@/types'
import type { MotionProps } from 'framer-motion'

export type DialogProps = {
  children?: ReactNode
  initial?: boolean
  open?: boolean
  setOpen: (open: boolean) => void
}

export type DialogContentProps = {
  ref?: Ref<'div'>
  children?: ReactNode
} & GlobalProps &
  ComponentProps<'div'> &
  MotionProps

export type DialogTriggerProps<T extends ElementType = 'button'> = ButtonProps<T>

declare module '@axolotl-ui/core' {
  export interface Components {
    Dialog: DialogProps
    DialogContent: DialogContentProps
    DialogTrigger: DialogTriggerProps
  }
}
