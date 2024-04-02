import type { ComponentProps, ElementType, RefAttributes } from 'react'

import type { GlobalProps } from '@/types'
import type { TextareaStyles } from '@/textarea/textarea'

export type TextareaProps<T extends ElementType = 'textarea'> = {
  component?: T
} & GlobalProps &
  ComponentProps<T> &
  RefAttributes<T> &
  TextareaStyles

declare module '@axolotl-ui/core' {
  export interface Components {
    Textarea: TextareaProps
  }
}
