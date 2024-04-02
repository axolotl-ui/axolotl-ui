'use client'

import React, { type ReactNode } from 'react'

import { cva, useOptions, type Components, type VariantProps, cx } from '@axolotl-ui/core'
import { Label } from '@/label/label'

import type { ToggleProps } from '@/toggle/types'

export type ToggleStyles = VariantProps<typeof toggleStyles>
export type ToggleHandleStyles = VariantProps<typeof toggleHandleStyles>

export const toggleStyles = cva({
  base: ['w-11 h-7', 'p-0.5', 'flex items-center', 'rounded-full', 'transition-all duration-150'],
  variants: {
    on: {
      true: 'bg-bright hover:bg-bright-hover',
      false: 'bg-secondary hover:bg-secondary-hover'
    }
  },
  defaultVariants: {
    on: false
  }
})

export const toggleHandleStyles = cva({
  base: ['bg-primary-on', 'w-6 h-6', 'rounded-full', 'transition-all duration-150'],
  variants: {
    on: {
      true: 'ms-4',
      false: ''
    }
  },
  defaultVariants: {
    on: false
  }
})

export const Toggle = (opts: ToggleProps): ReactNode => {
  const { options } = useOptions()

  const { all, Toggle }: Components = options.extend.components

  const {
    labelProps,
    handleProps,
    label,
    checked,
    className,
    color = 'accent1',
    ...props
  }: ToggleProps = {
    ...all,
    ...Toggle,
    ...opts
  }

  const { color: labelColor = color, ..._labelProps } = {
    ...all,
    ...Toggle?.labelProps,
    ...labelProps
  }

  const { color: handleColor = color, ..._handleProps } = {
    ...all,
    ...Toggle?.handleProps,
    ...handleProps
  }

  return (
    <Label
      {..._labelProps}
      color={labelColor}
      className={cx(
        'flex w-fit items-center gap-2',
        all?.className,
        Toggle?.labelProps?.className,
        labelProps?.className
      )}
    >
      <input {...props} checked={checked} type="checkbox" className="sr-only" />

      <div
        {...props}
        color={color}
        className={toggleStyles({
          on: checked,
          className: [all?.className, Toggle?.className, className]
        })}
      >
        {checked}
        <div
          {..._handleProps}
          color={handleColor}
          className={toggleHandleStyles({
            on: checked,
            className: [all?.className, Toggle?.handleProps?.className, handleProps?.className]
          })}
        />
      </div>

      {label}
    </Label>
  )
}
Toggle.displayName = 'Toggle'
