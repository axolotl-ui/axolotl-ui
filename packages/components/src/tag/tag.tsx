'use client'

import React, { type ElementType } from 'react'

import { cva, useOptions, type Components, type VariantProps } from '@axolotl-ui/core'

import type { TagProps } from '@/tag/types'

export type TagStyles = VariantProps<typeof tagStyles>

export const tagStyles = cva({
  base: [
    'font-medium',
    'w-fit',
    'flex items-center justify-center',
    'transition-all duration-300',
    'rounded-sm'
  ],
  variants: {
    variant: {
      solid: 'bg-bright text-bright-on',
      off: 'bg-secondary text-secondary-on',
      outline: ['bg-primary text-primary-on', 'border border-border']
    },
    size: {
      default: ['h-6', 'px-2 py-1', 'text-sm'],
      sm: ['h-5', 'px-1.5 py-0.5', 'text-sm'],
      lg: ['h-8', 'px-3 py-1.5', 'text-base']
    },
    transparent: {
      true: '',
      false: ''
    }
  },
  compoundVariants: [
    {
      variant: 'outline',
      transparent: true,
      className: 'bg-transparent'
    }
  ],
  defaultVariants: {
    variant: 'solid',
    size: 'default',
    transparent: false
  }
})

export const Tag = <T extends ElementType = 'span'>(opts: TagProps<T>) => {
  const { options } = useOptions()

  const { all, Tag }: Components = options.extend.components

  const {
    component: Component = 'span',
    children,
    className,
    color = 'accent1',
    variant,
    size,
    transparent,
    ...props
  }: TagProps<T> = { ...all, ...Tag, ...opts }

  return (
    <Component
      {...props}
      color={color}
      className={tagStyles({
        variant,
        size,
        transparent,
        className: [all?.className, Tag?.className, className]
      })}
    >
      {children}
    </Component>
  )
}
Tag.displayName = 'Tag'
