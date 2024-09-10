'use client'

import React, { Children, cloneElement, isValidElement, type ReactElement } from 'react'

import { css, cn, useOptions } from '@axolotl-ui/core'

import type { BoxProps } from '@/box/types'

const boxStyles = css({
  borderRadius: '$2xl',

  variants: {
    variant: {
      solid: {
        backgroundColor: '$container',
        color: '$on_container'
      },

      outlined: {
        backgroundColor: 'transparent',
        color: '$on_background',

        borderWidth: '$default',
        borderColor: '$border',
        borderStyle: 'solid'
      }
    }
  }
})

export const Box: React.FC<BoxProps> = (boxProps: BoxProps): React.ReactNode => {
  const {
    options: { components }
  } = useOptions()

  const {
    children,
    asChild,
    className,
    variant = 'solid',
    ...restProps
  }: BoxProps = { ...components.all, ...components?.Box, ...boxProps }

  const props: BoxProps = {
    className: cn(
      boxStyles({ variant }),
      components?.all?.className,
      components?.Box?.className,
      className
    ),

    ...restProps
  }

  if (children && asChild) {
    if (!isValidElement(children)) {
      throw new Error('Invalid children on Box!')
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
Box.displayName = 'Box'
