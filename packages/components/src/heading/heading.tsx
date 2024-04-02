'use client'

import React, { type ElementType, type ReactNode } from 'react'

import { cva, useOptions, type Components, type VariantProps } from '@axolotl-ui/core'

import type { HeadingProps } from '@/heading/types'

export type HeadingStyles = VariantProps<typeof headingStyles>

export const headingStyles = cva({
  base: ['transition-all duration-300'],
  variants: {
    variant: {
      h1: ['text-5xl font-bold', 'mb-6', 'text-primary-on'],
      h2: ['text-4xl font-bold', 'mb-4', 'text-primary-on'],
      h3: ['text-3xl font-medium', 'mb-2', 'text-secondary-on'],
      h4: ['text-2xl', 'mb-1.5', 'text-secondary-on'],
      h5: ['text-xl', 'mb-1', 'text-tertiary-on'],
      h6: ['text-lg', 'text-tertiary-on']
    },
    separator: {
      true: ['border-b border-border', 'pb-2'],
      false: ''
    }
  },
  defaultVariants: {
    variant: 'h2',
    separator: true
  }
})

export const Heading = <T extends ElementType = 'h2'>(opts: HeadingProps<T>): ReactNode => {
  const { options } = useOptions()

  const { all, Heading }: Components = options.extend.components

  const {
    component: Component = opts.variant || 'h2',
    children,
    className,
    color = 'accent1',
    variant,
    separator,
    ...props
  }: HeadingProps<T> = { ...all, ...Heading, ...opts }

  return (
    <Component
      {...props}
      color={color}
      className={headingStyles({
        variant,
        separator,
        className: [all?.className, Heading?.className, className]
      })}
    >
      {children}
    </Component>
  )
}
Heading.displayName = 'Heading'
