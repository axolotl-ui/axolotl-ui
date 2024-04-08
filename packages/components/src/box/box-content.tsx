'use client'

import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  type ReactElement,
  type ReactNode,
  type Ref
} from 'react'

import { cx, useOptions, type Components } from '@axolotl-ui/core'

import type { BoxContentProps, BoxContentRef } from '@/box/types'

export const BoxContent = forwardRef<BoxContentRef, BoxContentProps>(
  (opts: BoxContentProps, ref: Ref<BoxContentRef>): ReactNode => {
    const { options } = useOptions()

    const { all, BoxContent }: Components = options.extend.components

    const {
      children,
      asChild,
      className,
      color = 'accent1',
      ...restOpts
    }: BoxContentProps = { ...all, ...BoxContent, ...opts }

    const props: BoxContentProps = {
      ...restOpts,
      ref,
      color,
      className: cx('px-4 py-1', all?.className, BoxContent?.className, className)
    }

    if (children && asChild) {
      if (!isValidElement(children)) {
        throw new Error('Invalid children on BoxContent!')
      }

      if (Children.count(children) > 1) {
        console.warn(
          'More than one children on BoxContent when `asChild` is true! Selecting the first one.'
        )
      }

      const _children: ReactElement = (
        Children.count(children) > 1 ? Children.toArray(children)[0] : children
      ) as ReactElement

      return cloneElement(_children, {
        ...props,
        ..._children.props
      })
    }

    return <div {...props}>{children}</div>
  }
)
BoxContent.displayName = 'BoxContent'
