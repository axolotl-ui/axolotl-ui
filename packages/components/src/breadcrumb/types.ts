import type { ComponentProps, ReactNode } from 'react'

import type { GlobalProps } from '@/types'
import type { BreadcrumbItemStyles } from '@/breadcrumb/breadcrumb-item'

export type BreadcrumbProps = {
  children?: ReactNode
  separator?: ReactNode
} & GlobalProps &
  ComponentProps<'ol'>

export type BreadcrumbRef = HTMLOListElement

export type BreadcrumbItemProps = {
  children?: ReactNode
  separator?: ReactNode
  isLast?: boolean
  isFirst?: boolean
  active?: boolean
  disabled?: boolean
} & GlobalProps &
  ComponentProps<'li'> &
  BreadcrumbItemStyles

export type BreadcrumbItemRef = HTMLLIElement

declare module '@axolotl-ui/core' {
  export interface Components {
    Breadcrumb: BreadcrumbProps
    BreadcrumbItem: BreadcrumbItemProps
  }
}
