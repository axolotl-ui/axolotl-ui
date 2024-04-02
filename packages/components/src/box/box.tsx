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

import { cva, useOptions, type Components, type VariantProps } from '@axolotl-ui/core'

import type { BoxProps, BoxRef } from '@/box/types'

export type BoxStyles = VariantProps<typeof boxStyles>

export const boxStyles = cva({
  base: ['rounded-xl', 'transition-all duration-300'],
  variants: {
    variant: {
      solid: 'bg-secondary text-secondary-on',
      outline: ['bg-primary text-primary-on', 'border border-border'],
      unstyled: 'bg-transparent text-primary-on'
    },
    transparent: {
      true: '',
      false: ''
    }
  },
  compoundVariants: [
    {
      variant: 'outline',
      transparent: true,
      className: 'bg-transparent'
    }
  ],
  defaultVariants: {
    variant: 'solid',
    transparent: false
  }
})

export const Box = forwardRef<BoxRef, BoxProps>((opts: BoxProps, ref: Ref<BoxRef>): ReactNode => {
  const { options } = useOptions()

  const { all, Box }: Components = options.extend.components

  const {
    children,
    asChild,
    className,
    color = 'accent1',
    variant,
    transparent,
    ...restOpts
  }: BoxProps = { ...all, ...Box, ...opts }

  const props = {
    ...restOpts,
    ref,
    color,
    className: boxStyles({
      variant,
      transparent,
      className: [all?.className, Box?.className, className]
    })
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
})
Box.displayName = 'Box'
