'use client'

import React, { type ElementType, type ReactNode } from 'react'

import { useOptions, type Components, type VariantProps } from '@axolotl-ui/core'
import { inputStyles } from '@/input/input'

import type { TextareaProps } from '@/textarea/types'

export type TextareaStyles = VariantProps<typeof textareaStyles>

export const textareaStyles = inputStyles

export const Textarea = <T extends ElementType = 'textarea'>(opts: TextareaProps<T>): ReactNode => {
  const { options } = useOptions()

  const { all, Textarea }: Components = options.extend.components

  const {
    component: Component = 'textarea',
    className,
    color = 'accent1',
    ...props
  }: TextareaProps<T> = { ...all, ...Textarea, ...opts }

  return (
    <Component
      {...props}
      color={color}
      className={textareaStyles({
        className: ['h-auto px-4 py-2', all?.className, Textarea?.className, className]
      })}
    />
  )
}
Textarea.displayName = 'Textarea'
