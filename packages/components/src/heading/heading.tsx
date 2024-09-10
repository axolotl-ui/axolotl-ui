'use client'

import type React from 'react'
import { Children, cloneElement, isValidElement, type ReactElement } from 'react'

import { css, cn, useOptions } from '@axolotl-ui/core'

import type { HeadingProps } from '@/heading/types'

const headingStyles = css({
  transitionProperty: 'color, background-color, border-color',
  transitionDuration: '300ms',
  transitionTimingFunction: 'ease-in-out',

  variants: {
    variant: {
      h1: {
        color: '$on_background',

        fontSize: '$5xl',
        fontWeight: '$bold',

        lineHeight: 1,

        marginBottom: '$10'
      },

      h2: {
        color: '$on_background',

        fontSize: '$4xl',
        fontWeight: '$bold',

        lineHeight: 1,

        marginBottom: '$6'
      },

      h3: {
        color: '$on_background',

        fontSize: '$3xl',
        fontWeight: '$semibold',

        lineHeight: 1,

        marginBottom: '$4'
      },

      h4: {
        color: '$on_container',

        fontSize: '$2xl',
        fontWeight: '$medium',

        marginBottom: '$2'
      },

      h5: {
        color: '$on_container',

        fontSize: '$xl',

        marginBottom: '$1'
      },

      h6: {
        color: '$on_container',

        fontSize: '$lg'
      }
    },

    separator: {
      true: {
        paddingBottom: '$3',

        borderBottomWidth: '$thicc',
        borderColor: '$border',
        borderStyle: 'solid'
      },
      false: {}
    }
  }
})

export const Heading: React.FC<HeadingProps> = (headingProps: HeadingProps): React.ReactNode => {
  const {
    options: { components }
  } = useOptions()

  const {
    children,
    asChild,
    className,
    variant = 'h2',
    separator = true,
    ...restProps
  }: HeadingProps = {
    ...components.all,
    ...components?.Heading,
    ...headingProps
  }

  const props: HeadingProps = {
    className: cn(
      headingStyles({ variant, separator }),
      components?.all?.className,
      components?.Heading?.className,
      className
    ),

    ...restProps
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

  const Component = variant

  return <Component {...props}>{children}</Component>
}
Heading.displayName = 'Heading'
