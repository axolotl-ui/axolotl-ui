import type { ComponentProps, ReactNode } from 'react'

import type { LinkStyles } from '@/link/link'
import type { GlobalProps } from '@/types'

export type LinkRef = HTMLAnchorElement
export type LinkProps = {
  children?: ReactNode
  asChild?: boolean
} & GlobalProps &
  ComponentProps<'a'> &
  LinkStyles

declare module '@axolotl-ui/core' {
  export interface Components {
    Link: LinkProps
  }
}
