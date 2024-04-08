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

import type { TextProps, TextRef } from '@/text/types'

export type TextStyles = VariantProps<typeof textStyles>

export const textStyles = cva({
  base: 'transition-all duration-300',
  variants: {
    variant: {
      primary: 'text-primary-on',
      secondary: 'text-secondary-on',
      tertiary: 'text-tertiary-on',
      bright: 'text-bright-on'
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})

export const Text = forwardRef<TextRef, TextProps>(
  (opts: TextProps, ref: Ref<TextRef>): ReactNode => {
    const { options } = useOptions()

    const { all, Text }: Components = options.extend.components

    const {
      children,
      asChild,
      className,
      color = 'accent1',
      variant,
      ...restOpts
    }: TextProps = { ...all, ...Text, ...opts }

    const props: TextProps = {
      ...restOpts,
      ref,
      color,
      className
    }

    if (children && asChild) {
      if (!isValidElement(children)) {
        throw new Error('Invalid children on Text!')
      }

      if (Children.count(children) > 1) {
        console.warn(
          'More than one children on Text when `asChild` is true! Selecting the first one.'
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

    return <p {...props}>{children}</p>
  }
)
Text.displayName = 'Text'
