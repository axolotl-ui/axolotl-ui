'use client'

import React, { forwardRef, type ReactNode, type Ref } from 'react'

import { useOptions, cva, type Components, type VariantProps, cx } from '@axolotl-ui/core'

import { Label } from '@/label/label'

import type { CheckboxProps, CheckboxRef } from '@/checkbox/types'
import type { LabelProps } from '@/label/types'

export type CheckboxStyles = VariantProps<typeof checkboxStyles>

export const checkboxStyles = cva({
  base: [
    'rounded-sm',
    'relative flex items-center justify-center',
    'checked:text-bright-on',
    'disabled:pointer-events-none disabled:cursor-default disabled:opacity-50',
    'bg-secondary text-secondary-on',
    'checked:bg-bright checked:text-bright-on'
  ],
  variants: {
    size: {
      default: ['h-6 w-6', 'p-1'],
      sm: ['h-4 w-4', 'p-0.5'],
      lg: ['h-8 w-8', 'p-1']
    }
  },
  defaultVariants: {
    size: 'default'
  }
})

export const Checkbox = forwardRef<CheckboxRef, CheckboxProps>(
  (opts: CheckboxProps, ref: Ref<CheckboxRef>): ReactNode => {
    const { options } = useOptions()

    const { all, Checkbox }: Components = options.extend.components

    const {
      labelProps: labelOpts,

      label,
      className,
      color = 'accent1',
      size,
      ...restOpts
    }: CheckboxProps = {
      ...all,
      ...Checkbox,
      ...opts
    }

    const { color: labelColor = color, ...restlabelOpts }: LabelProps = {
      ...Checkbox?.labelProps,
      ...labelOpts
    }

    const props: CheckboxProps = {
      ...restOpts,
      ref,
      type: 'checkbox',
      color,
      className: checkboxStyles({
        size,
        className: [all?.className, Checkbox?.className, className]
      })
    }

    const labelProps: LabelProps = {
      ...restlabelOpts,
      color: labelColor,
      className: cx(
        'flex w-fit items-center gap-2',
        Checkbox?.labelProps?.className,
        labelOpts?.className
      )
    }

    return (
      <Label {...labelProps}>
        <input {...props} />

        {label}
      </Label>
    )
  }
)
Checkbox.displayName = 'Checkbox'
