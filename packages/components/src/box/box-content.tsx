'use client'

import React, { Children, cloneElement, isValidElement, type ReactElement } from 'react'

import { css, cn, useOptions } from '@axolotl-ui/core'

import type { BoxProps } from '@/box/types'

const boxContentStyles = css({
  borderRadius: '$2xl',

  paddingX: '$5',
  paddingY: '$3'
})

export const BoxContent: React.FC<BoxProps> = (boxContentProps: BoxProps): React.ReactNode => {
  const {
    options: { components }
  } = useOptions()

  const {
    children,
    asChild,
    className,
    variant = 'solid',
    ...restProps
  }: BoxProps = {
    ...components.all,
    ...components?.BoxContent,
    ...boxContentProps
  }

  const props: BoxProps = {
    className: cn(
      boxContentStyles(),
      components?.all?.className,
      components?.BoxContent?.className,
      className
    ),

    ...restProps
  }

  if (children && asChild) {
    if (!isValidElement(children)) {
      throw new Error('Invalid children on BoxContent!')
    }

    if (Children.count(children) > 1) {
      console.warn('More than one children on Box when `asChild` is true! Selecting the first one.')
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
BoxContent.displayName = 'Box'
