'use client'

import React, {
  forwardRef,
  isValidElement,
  Children,
  type ReactElement,
  type ReactNode,
  type Ref,
  cloneElement
} from 'react'

import { cx, useOptions, type Components } from '@axolotl-ui/core'

import type { ContainerProps, ContainerRef } from '@/container/types'

export const Container = forwardRef((opts: ContainerProps, ref: Ref<ContainerRef>): ReactNode => {
  const { options } = useOptions()

  const { all, Container }: Components = options.extend.components

  const {
    children,
    asChild,
    className,
    color = 'accent1',
    ...restOpts
  }: ContainerProps = { ...all, ...Container, ...opts }

  const props: ContainerProps = {
    ...restOpts,
    ref,
    color,
    className: cx(
      'mx-auto w-11/12 px-2',
      'transition-all duration-300',
      all?.className,
      Container?.className,
      className
    )
  }

  if (children && asChild) {
    if (!isValidElement(children)) {
      throw new Error('Invalid children on Continer!')
    }

    if (Children.count(children) > 1) {
      console.warn(
        'More than one children on Container when `asChild` is true! Selecting the first one.'
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
})
Container.displayName = 'Container'
