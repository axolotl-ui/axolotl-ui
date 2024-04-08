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

import type { SeparatorProps, SeparatorRef } from '@/separator/types'

export type SeparatorStyles = VariantProps<typeof separatorStyles>

export const separatorStyles = cva({
  base: [
    'bg-border',
    'transition-all duration-300',
    'relative',
    'flex items-center justify-center'
  ],
  variants: {
    orientation: {
      horizontal: ['my-4', 'h-0.5 w-full'],
      vertical: ['mx-4', 'h-full w-0.5']
    }
  },
  defaultVariants: {
    orientation: 'horizontal'
  }
})

export const Separator = forwardRef<SeparatorRef, SeparatorProps>(
  (opts: SeparatorProps, ref: Ref<SeparatorRef>): ReactNode => {
    const { options } = useOptions()

    const { all, Separator }: Components = options.extend.components

    const {
      children,
      asChild,
      className,
      color = 'accent1',
      orientation = 'horizontal',
      ...restOpts
    }: SeparatorProps = { ...all, ...Separator, ...opts }

    const props: SeparatorProps = {
      ...restOpts,
      ref,
      color,
      'aria-orientation': orientation,
      role: 'separator',
      className: separatorStyles({
        orientation,
        className: [all?.className, Separator?.className, className]
      })
    }

    if (children && asChild) {
      if (!isValidElement(children)) {
        throw new Error('Invalid children on Separator!')
      }

      if (Children.count(children) > 1) {
        console.warn(
          'More than one children on Separator when `asChild` is true! Selecting the first one.'
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
      <div {...props}>
        <div
          color={color}
          className="bg-primary absolute mb-1 flex max-h-8 w-fit items-center justify-center px-2"
        >
          {children}
        </div>
      </div>
    )
  }
)
Separator.displayName = 'Separator'
