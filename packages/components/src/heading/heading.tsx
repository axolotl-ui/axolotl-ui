'use client'

import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  type ReactElement,
  type ReactNode,
  type Ref
} from 'react'

import { cva, useOptions, type Components, type VariantProps } from '@axolotl-ui/core'

import type { HeadingProps, HeadingRef } from '@/heading/types'

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

export const Heading = forwardRef<HeadingRef, HeadingProps>(
  (opts: HeadingProps, ref: Ref<HeadingRef>): ReactNode => {
    const { options } = useOptions()

    const { all, Heading }: Components = options.extend.components

    const {
      children,
      asChild,
      className,
      color = 'accent1',
      variant,
      separator,
      ...restOpts
    }: HeadingProps = { ...all, ...Heading, ...opts }

    const props: HeadingProps = {
      ...restOpts,
      ref,
      children,
      color,
      className: headingStyles({
        variant,
        separator,
        className: [all?.className, Heading?.className, className]
      })
    }

    if (children && asChild) {
      if (!isValidElement(children)) {
        throw new Error('Invalid children on Heading!')
      }

      if (Children.count(children) > 1) {
        console.warn(
          'More than one children on Heading when `asChild` is true! Selecting the first one.'
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

    return <h1 {...props}>{children}</h1>
  }
)
Heading.displayName = 'Heading'
