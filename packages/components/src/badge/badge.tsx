'use client'

import type React from 'react'
import { Children, cloneElement, isValidElement, type ReactElement } from 'react'

import { css, cn, useOptions } from '@axolotl-ui/core'

import type { BadgeProps } from '@/badge/types'

const badgeStyles = css({
  display: 'flex',

  justifyContent: 'center',
  alignItems: 'center',

  transitionProperty: 'color, background-color, border-color',
  transitionDuration: '300ms',
  transitionTimingFunction: 'ease-in-out',

  borderRadius: '$full',

  padding: '$05',

  variants: {
    variant: {
      solid: {
        backgroundColor: '$vibrant',
        color: '$on_vibrant'
      },

      off: {
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
    },

    size: {
      default: {
        height: '$3',
        width: '$3',

        fontSize: '$xs'
      },

      sm: {
        height: '$2',
        width: '$2'
      },

      lg: {
        height: '$4',
        width: '$4',

        fontSize: '$sm'
      }
    }
  }
})

export const Badge: React.FC<BadgeProps> = (badgeProps: BadgeProps): React.ReactNode => {
  const {
    options: { components }
  } = useOptions()

  const {
    children,
    asChild,
    className,
    variant = 'solid',
    size = 'default',
    ...restProps
  }: BadgeProps = { ...components.all, ...components?.Badge, ...badgeProps }

  const props: BadgeProps = {
    className: cn(
      badgeStyles({ variant, size }),
      components?.all?.className,
      components?.Badge?.className,
      className
    ),

    ...restProps
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
}
Badge.displayName = 'Badge'
