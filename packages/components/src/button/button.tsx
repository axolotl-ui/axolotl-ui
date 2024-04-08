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
import { LoaderCircle } from 'lucide-react'

import type { ButtonProps, ButtonRef } from '@/button/types'

export type ButtonStyles = VariantProps<typeof buttonStyles>

export const buttonStyles = cva({
  base: [
    'items-center justify-center flex',
    'w-fit',
    'disabled:opacity-50',
    'font-bold',
    'active:scale-95',
    'rounded-xl',
    'disabled:pointer-events-none',
    'transition-all duration-300'
  ],
  variants: {
    variant: {
      solid: ['bg-bright text-bright-on', 'hover:bg-bright-hover'],
      off: ['bg-secondary text-secondary-on', 'hover:bg-secondary-hover hover:text-tertiary-on'],
      outline: [
        'bg-primary text-primary-on',
        'hover:bg-primary-hover hover:text-secondary-on hover:border-border-hover',
        'border border-border'
      ],
      ghost: ['text-primary-on bg-primary', 'hover:bg-primary-hover hover:text-secondary-on'],
      unstyled: ['text-primary-on', 'hover:text-secondary-on']
    },
    transparent: {
      true: '',
      false: ''
    },
    size: {
      default: ['h-10', 'px-5 py-1.5'],
      sm: ['px-3 py-0.5', 'h-8'],
      lg: ['px-6 py-1.5', 'h-12'],
      icon: ['h-10 w-10', 'p-2']
    }
  },
  compoundVariants: [
    {
      variant: ['outline', 'ghost'],
      transparent: true,
      className: 'bg-transparent'
    }
  ],
  defaultVariants: {
    variant: 'solid',
    transparent: false,
    size: 'default'
  }
})

export const Button = forwardRef<ButtonRef, ButtonProps>(
  (opts: ButtonProps, ref: Ref<ButtonRef>) => {
    const { options } = useOptions()

    const { all, Button }: Components = options.extend.components

    const {
      children,
      asChild,
      className,
      color = 'accent1',
      disabled = opts.disabled || opts.loading,
      loading,
      loader = <LoaderCircle />,
      loaderPosition = 'left',
      variant,
      transparent,
      size,
      ...restOpts
    }: ButtonProps = { ...all, ...Button, ...opts }

    const props: ButtonProps = {
      ...restOpts,
      ref,
      color,
      disabled,
      className: buttonStyles({
        variant,
        transparent,
        size,
        className: [all?.className, Button?.className, className]
      })
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

    return (
      <button {...props}>
        {loading && loaderPosition === 'left' && (
          <div className="mr-1.5 animate-spin">{loader}</div>
        )}
        {children}
        {loading && loaderPosition === 'right' && (
          <div className="ml-1.5 animate-spin">{loader}</div>
        )}
      </button>
    )
  }
)
Button.displayName = 'Button'
