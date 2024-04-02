'use client'

import React, {
  Children,
  cloneElement,
  forwardRef,
  type ReactElement,
  type ReactNode,
  type Ref
} from 'react'

import { useOptions, type Components, cx } from '@axolotl-ui/core'
import { ChevronRight } from 'lucide-react'

import type { BreadcrumbItemProps, BreadcrumbProps, BreadcrumbRef } from '@/breadcrumb/types'

export const Breadcrumb = forwardRef(
  (opts: BreadcrumbProps, ref: Ref<BreadcrumbRef>): ReactNode => {
    const { options } = useOptions()

    const { all, Breadcrumb }: Components = options.extend.components

    const {
      children,
      className,
      color = 'accent1',
      separator = <ChevronRight />,
      ...restOpts
    }: BreadcrumbProps = { ...all, ...Breadcrumb, ...opts }

    const props = {
      ...restOpts,
      ref,
      color,
      className: cx('flex w-full flex-wrap', all?.className, Breadcrumb?.className, className)
    }

    const childs: ReactElement[] = Children.toArray(children) as unknown as ReactElement[]

    const clones: ReactNode = childs.map((child: ReactElement, index) => {
      return cloneElement(child, {
        color,
        separator,
        active: child.props.active || childs.length === index + 1,
        isLast: childs.length === index + 1,
        isFirst: index === 0
      } satisfies BreadcrumbItemProps)
    })

    return <ol {...props}>{clones}</ol>
  }
)
Breadcrumb.displayName = 'Breadcrumb'
