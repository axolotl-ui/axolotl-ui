'use client'

import React, { type ElementType, type ReactNode } from 'react'

import { cva, useOptions, type Components, type VariantProps, cx } from '@axolotl-ui/core'
import { Label } from '@/label/label'

import type { InputContainerProps, InputLabelProps, InputProps } from '@/input/types'

export type InputStyles = VariantProps<typeof inputStyles>
export type InputContainerStyles = VariantProps<typeof inputContainerStyles>

export const inputContainerStyles = cva({
  base: [
    'text-primary-on',
    'bg-transparent',
    'transition-all duration-300',
    'w-full h-min',
    'relative flex items-center justify-center'
  ]
})

export const inputStyles = cva({
  base: [
    'w-full h-12',
    'flex items-center',
    'transition-all duration-300',
    'border-border',
    'text-primary-on',
    'placeholder-primary-on',
    'hover:border-border-hover',
    'focus:border-border-hover'
  ],
  variants: {
    variant: {
      solid: ['border', 'rounded-lg', 'bg-secondary'],
      outline: ['border', 'rounded-lg', 'bg-primary'],
      underline: ['bg-primary', 'border-b', 'rounded-none'],
      unstyled: ['bg-transparent', 'rounded-none']
    },
    transparent: {
      true: '',
      false: ''
    }
  },
  compoundVariants: [
    {
      variant: ['outline', 'underline'],
      transparent: true,
      className: 'bg-transparent'
    }
  ],
  defaultVariants: {
    variant: 'outline',
    transparent: false
  }
})

export const Input = (opts: InputProps): ReactNode => {
  const { options } = useOptions()

  const { all, Input }: Components = options.extend.components

  const {
    labelProps,
    containerProps,
    leftAddon,
    rightAddon,
    id,
    label,
    className,
    color = 'accent1',
    variant,
    transparent,
    ...props
  }: InputProps = { ...all, ...Input, ...opts }

  const {
    htmlFor = id,
    color: labelColor = color,
    ..._labelProps
  }: InputLabelProps = {
    ...all,
    ...Input?.labelProps,
    ...labelProps
  }

  const { color: containerColor = color, ..._containerProps }: InputContainerProps = {
    ...all,
    ...Input?.containerProps,
    ...containerProps
  }

  return (
    <div className={label ? 'grid gap-1' : ''}>
      {label && (
        <Label
          {..._labelProps}
          color={labelColor}
          className={cx(all?.className, Input?.labelProps?.className, labelProps?.className)}
          htmlFor={htmlFor}
        >
          {label}
        </Label>
      )}

      <div
        {..._containerProps}
        color={containerColor}
        className={inputContainerStyles({
          className: [all?.className, Input?.containerProps?.className, containerProps?.className]
        })}
      >
        {leftAddon && (
          <div className="absolute left-0 ms-2 flex h-8 w-8 items-center justify-center p-2">
            {leftAddon}
          </div>
        )}

        <input
          {...props}
          color={color}
          className={inputStyles({
            variant,
            transparent,
            className: [
              leftAddon && !rightAddon
                ? variant !== 'underline'
                  ? 'pe-4 ps-10'
                  : 'pe-2 ps-9'
                : '',
              rightAddon && !leftAddon
                ? variant !== 'underline'
                  ? 'pe-10 ps-4'
                  : 'pe-9 ps-2'
                : '',
              leftAddon && rightAddon
                ? variant !== 'underline'
                  ? 'pe-10 ps-10'
                  : 'pe-9 ps-9'
                : '',
              !leftAddon || !rightAddon ? (variant !== 'underline' ? 'px-4' : 'px-2') : '',
              all?.className,
              Input?.className,
              className
            ]
          })}
        />

        {rightAddon && (
          <div className="absolute right-0 me-2 flex h-8 w-8 items-center justify-center p-2">
            {rightAddon}
          </div>
        )}
      </div>
    </div>
  )
}
Input.displayName = 'Input'
