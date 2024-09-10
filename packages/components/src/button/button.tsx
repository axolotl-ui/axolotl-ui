'use client'

import type React from 'react'
import { Children, cloneElement, isValidElement, type ReactElement } from 'react'

import { css, cn, useOptions } from '@axolotl-ui/core'

import type { ButtonProps } from '@/button/types'

const buttonStyles = css({
  cursor: 'pointer',

  display: 'flex',

  justifyContent: 'center',
  alignItems: 'center',

  width: 'fit-content',

  transitionProperty: 'all',
  transitionDuration: '300ms',
  transitionTimingFunction: 'ease-in-out',

  borderRadius: '$2xl',

  fontWeight: '$bold',

  '&:active': {
    transform: 'scale(0.90)'
  },

  '&:disabled': {
    pointerEvents: 'none',
    cursor: 'not-allowed',
    opacity: 0.5
  },

  '&:hover': {
    fontWeight: '$extrabold'
  },

  variants: {
    variant: {
      solid: {
        backgroundColor: '$vibrant',
        color: '$on_vibrant',

        '&:hover': {
          backgroundColor: '$vibrant_hover',
          color: '$on_vibrant_hover'
        }
      },

      off: {
        backgroundColor: '$container',
        color: '$on_container',

        '&:hover': {
          backgroundColor: '$container_hover',
          color: '$on_container_hover'
        }
      },

      outlined: {
        backgroundColor: 'transparent',
        color: '$on_background',

        borderWidth: '$default',
        borderColor: '$border',
        borderStyle: 'solid',

        '&:hover': {
          backgroundColor: '$background_hover',
          color: '$on_background_hover',
          borderColor: '$border_hover'
        }
      },

      ghost: {
        backgroundColor: 'transparent',
        color: '$on_background',

        '&:hover': {
          backgroundColor: '$background_hover',
          color: '$on_background_hover'
        }
      },

      text: {
        backgroundColor: 'transparent',
        color: '$on_background',

        '&:hover': {
          color: '$on_background_hover'
        }
      }
    },

    size: {
      default: {
        paddingX: '$4',
        paddingY: '$1'
      },

      sm: {
        paddingX: '$2',
        paddingY: '$05'
      },

      lg: {
        paddingX: '$5',
        paddingY: '$150'
      },

      round: {
        height: '$10',
        width: '$10',

        paddingX: '$2',
        paddingY: '$2',

        borderRadius: '$full'
      }
    }
  }
})

export const Button: React.FC<ButtonProps> = (buttonProps: ButtonProps): React.ReactNode => {
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
  }: ButtonProps = { ...components.all, ...components?.Button, ...buttonProps }

  const props: ButtonProps = {
    className: cn(
      buttonStyles({ variant, size }),
      components?.all?.className,
      components?.Button?.className,
      className
    ),

    ...restProps
  }

  if (children && asChild) {
    if (!isValidElement(children)) {
      throw new Error('Invalid children on Button!')
    }

    if (Children.count(children) > 1) {
      console.warn(
        'More than one children on Button when `asChild` is true! Selecting the first one.'
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

  return <button {...props}>{children}</button>
}
Button.displayName = 'Button'
