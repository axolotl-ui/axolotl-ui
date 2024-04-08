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

import type { LinkProps, LinkRef } from '@/link/types'

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

export const Link = forwardRef<LinkRef, LinkProps>(
  (opts: LinkProps, ref: Ref<LinkRef>): ReactNode => {
    const { options } = useOptions()

    const { all, Link }: Components = options.extend.components

    const {
      children,
      asChild,
      className,
      color = 'accent1',
      variant,
      ...restOpts
    }: LinkProps = { ...all, ...Link, ...opts }

    const props: LinkProps = {
      ...restOpts,
      ref,
      color,
      className: linkStyles({
        variant,
        className: [all?.className, Link?.className, className]
      })
    }

    if (children && asChild) {
      if (!isValidElement(children)) {
        throw new Error('Invalid children on Link!')
      }

      if (Children.count(children) > 1) {
        console.warn(
          'More than one children on Link when `asChild` is true! Selecting the first one.'
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

    return <a {...props}>{children}</a>
  }
)
Link.displayName = 'Link'
