'use client'

import { forwardRef, type ReactNode, type Ref } from 'react'

import { inputStyles } from '@/input/input'
import { useOptions, type Components, type VariantProps } from '@axolotl-ui/core'

import type { TextareaProps, TextareaRef } from '@/textarea/types'

export type TextareaStyles = VariantProps<typeof textareaStyles>

export const textareaStyles = inputStyles

export const Textarea = forwardRef<TextareaRef, TextareaProps>(
  (opts: TextareaProps, ref: Ref<TextareaRef>): ReactNode => {
    const { options } = useOptions()

    const { all, Textarea }: Components = options.extend.components

    const {
      className,
      color = 'accent1',
      ...restOpts
    }: TextareaProps = { ...all, ...Textarea, ...opts }

    const props: TextareaProps = {
      ...restOpts,
      ref,
      color,
      className: textareaStyles({
        className: ['h-auto px-4 py-2', all?.className, Textarea?.className, className]
      })
    }

    return <textarea {...props} />
  }
)
Textarea.displayName = 'Textarea'
