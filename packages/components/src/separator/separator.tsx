'use client'

import React, { type ElementType, type ReactNode } from 'react'

import { cva, useOptions, type Components, type VariantProps } from '@axolotl-ui/core'

import type { SeparatorProps } from '@/separator/types'

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

export const Separator = <T extends ElementType = 'div'>(opts: SeparatorProps<T>): ReactNode => {
  const { options } = useOptions()

  const { all, Separator }: Components = options.extend.components

  const {
    component: Component = 'div',
    children,
    className,
    color = 'accent1',
    orientation = 'horizontal',
    ...props
  }: SeparatorProps<T> = { ...all, ...Separator, ...opts }

  return (
    <Component
      {...props}
      aria-orientation={orientation}
      role="separator"
      color={color}
      className={separatorStyles({
        orientation,
        className: [all?.className, Separator?.className, className]
      })}
    >
      <div
        color={color}
        className="bg-primary absolute mb-1 flex max-h-8 w-fit items-center justify-center px-2"
      >
        {children}
      </div>
    </Component>
  )
}
Separator.displayName = 'Separator'
