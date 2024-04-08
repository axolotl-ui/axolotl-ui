'use client'

import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  type ReactElement,
  type Ref
} from 'react'

import { cva, useOptions, type Components, type VariantProps } from '@axolotl-ui/core'

import type { BadgeProps, BadgeRef } from '@/badge/types'

export type BadgeStyles = VariantProps<typeof badgeStyles>

export const badgeStyles = cva({
  base: ['rounded-full', 'transition-all duration-300'],
  variants: {
    variant: {
      solid: 'bg-bright',
      off: 'bg-secondary',
      outline: ['bg-primary', 'border border-border']
    },
    size: {
      default: 'h-2 w-2 max-w-4',
      sm: 'h-1 w-1 max-w-2',
      lg: 'h-3 w-3 max-w-6'
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
    size: 'default',
    transparent: false
  }
})

export const Badge = forwardRef<BadgeRef, BadgeProps>((opts: BadgeProps, ref: Ref<BadgeRef>) => {
  const { options } = useOptions()

  const { all, Badge }: Components = options.extend.components

  const {
    children,
    asChild,
    className,
    color = 'accent1',
    variant,
    size,
    transparent,
    ...restOpts
  }: BadgeProps = {
    ...all,
    ...Badge,
    ...opts
  }

  const props: BadgeProps = {
    ...restOpts,
    ref,
    color,
    className: badgeStyles({
      variant,
      size,
      transparent,
      className: [all?.className, Badge?.className, className]
    })
  }

  if (children && asChild) {
    if (!isValidElement(children)) {
      throw new Error('Invalid children on Badge!')
    }

    if (Children.count(children) > 1) {
      console.warn(
        'More than one children on Badge when `asChild` is true! Selecting the first one.'
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

  return <span {...props}>{children}</span>
})
Badge.displayName = 'Badge'
