import type { ComponentProps, ReactNode } from 'react'

import type { TagStyles } from '@/tag/tag'
import type { GlobalProps } from '@/types'

export type TagRef = HTMLSpanElement
export type TagProps = {
  children?: ReactNode
  asChild?: boolean
} & GlobalProps &
  ComponentProps<'span'> &
  TagStyles

declare module '@axolotl-ui/core' {
  export interface Components {
    Tag: TagProps
  }
}
