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

import type { TagProps, TagRef } from '@/tag/types'

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

export const Tag = forwardRef<TagRef, TagProps>((opts: TagProps, ref: Ref<TagRef>) => {
  const { options } = useOptions()

  const { all, Tag }: Components = options.extend.components

  const {
    children,
    asChild,
    className,
    color = 'accent1',
    variant,
    size,
    transparent,
    ...restOpts
  }: TagProps = { ...all, ...Tag, ...opts }

  const props: TagProps = {
    ...restOpts,
    ref,
    color,
    className: tagStyles({
      variant,
      size,
      transparent,
      className: [all?.className, Tag?.className, className]
    })
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
})
Tag.displayName = 'Tag'
