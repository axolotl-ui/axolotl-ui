'use client'

import React, { type ElementType, type ReactNode } from 'react'

import { cva, useOptions, type Components, type VariantProps } from '@axolotl-ui/core'

import type { LinkProps } from '@/link/types'

export type LinkStyles = VariantProps<typeof linkStyles>

export const linkStyles = cva({
  base: ['transition-all duration-300', 'font-medium underline'],
  variants: {
    variant: {
      default: ['text-primary-on', 'hover:text-secondary-on'],
      disabled: ['text-tertiary-on', 'hover:text-secondary-on']
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

export const Link = <T extends ElementType = 'a'>(opts: LinkProps<T>): ReactNode => {
  const { options } = useOptions()

  const { all, Link }: Components = options.extend.components

  const {
    component: Component = 'a',
    children,
    className,
    color = 'accent1',
    ...props
  }: LinkProps<T> = { ...all, ...Link, ...opts }

  return (
    <Component
      {...props}
      color={color}
      className={linkStyles({
        className: [all?.className, Link?.className, className]
      })}
    >
      {children}
    </Component>
  )
}
Link.displayName = 'Link'
