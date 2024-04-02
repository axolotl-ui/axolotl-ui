'use client'

import React, { type ElementType, type ReactNode } from 'react'

import { cva, useOptions, type Components, type VariantProps } from '@axolotl-ui/core'

import type { TextProps } from '@/text/types'

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

export const Text = <T extends ElementType = 'p'>(opts: TextProps<T>): ReactNode => {
  const { options } = useOptions()

  const { all, Text }: Components = options.extend.components

  const {
    component: Component = 'p',
    children,
    className,
    color = 'accent1',
    variant,
    ...props
  }: TextProps<T> = { ...all, ...Text, ...opts }

  return (
    <Component
      {...props}
      color={color}
      className={textStyles({
        variant,
        className: [all?.className, Text?.className, className]
      })}
    >
      {children}
    </Component>
  )
}
Text.displayName = 'Text'
