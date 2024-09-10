'use client'

import type React from 'react'
import { Children, cloneElement, isValidElement, type ReactElement } from 'react'

import { css, cn, useOptions } from '@axolotl-ui/core'

import type { TagProps } from '@/tag/types'

const tagStyles = css({
  display: 'flex',

  justifyContent: 'center',
  alignItems: 'center',

  transitionProperty: 'color, background-color, border-color',
  transitionDuration: '300ms',
  transitionTimingFunction: 'ease-in-out',

  width: 'fit-content',

  borderRadius: '$xl',

  fontWeight: '$bold',

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
        paddingY: '$1',
        paddingX: '$3'
      },

      sm: {
        paddingY: '$05',
        paddingX: '$2'
      },

      lg: {
        paddingY: '$150',
        paddingX: '$5'
      }
    }
  }
})

export const Tag: React.FC<TagProps> = (tagProps: TagProps): React.ReactNode => {
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
  }: TagProps = { ...components.all, ...components?.Tag, ...tagProps }

  const props: TagProps = {
    className: cn(
      tagStyles({ variant, size }),
      components?.all?.className,
      components?.Tag?.className,
      className
    ),

    ...restProps
  }

  if (children && asChild) {
    if (!isValidElement(children)) {
      throw new Error('Invalid children on Tag!')
    }

    if (Children.count(children) > 1) {
      console.warn('More than one children on Tag when `asChild` is true! Selecting the first one.')
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
Tag.displayName = 'Tag'
