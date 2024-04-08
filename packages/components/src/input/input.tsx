'use client'

import { forwardRef, type ReactNode, type Ref } from 'react'

import { Label } from '@/label/label'
import { cva, cx, useOptions, type Components, type VariantProps } from '@axolotl-ui/core'

import type { InputContainerProps, InputLabelProps, InputProps, InputRef } from '@/input/types'

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

export const Input = forwardRef<InputRef, InputProps>(
  (opts: InputProps, ref: Ref<InputRef>): ReactNode => {
    const { options } = useOptions()

    const { all, Input }: Components = options.extend.components

    const {
      labelProps: labelOpts,
      containerProps: containerOpts,

      leftAddon,
      rightAddon,
      id,
      label,
      className,
      color = 'accent1',
      variant,
      transparent,
      ...restOpts
    }: InputProps = { ...all, ...Input, ...opts }

    const {
      htmlFor = id,
      color: labelColor = color,
      ...restLabelOpts
    }: InputLabelProps = {
      ...all,
      ...Input?.labelProps,
      ...labelOpts
    }

    const { color: containerColor = color, ...restContainerOpts }: InputContainerProps = {
      ...all,
      ...Input?.containerProps,
      ...containerOpts
    }

    const props: InputProps = {
      ...restOpts,
      ref,
      id,
      color,
      className: inputStyles({
        variant,
        transparent,
        className: [
          leftAddon && !rightAddon ? (variant !== 'underline' ? 'pe-4 ps-10' : 'pe-2 ps-9') : '',
          rightAddon && !leftAddon ? (variant !== 'underline' ? 'pe-10 ps-4' : 'pe-9 ps-2') : '',
          leftAddon && rightAddon ? (variant !== 'underline' ? 'pe-10 ps-10' : 'pe-9 ps-9') : '',
          !leftAddon || !rightAddon ? (variant !== 'underline' ? 'px-4' : 'px-2') : '',
          all?.className,
          Input?.className,
          className
        ]
      })
    }

    const labelProps: InputLabelProps = {
      ...restLabelOpts,
      htmlFor,
      color: labelColor,
      className: cx(all?.className, Input?.labelProps?.className, restLabelOpts?.className)
    }

    const containerProps: InputContainerProps = {
      ...restContainerOpts,
      color: containerColor,
      className: inputContainerStyles({
        className: [all?.className, Input?.containerProps?.className, restContainerOpts?.className]
      })
    }

    return (
      <div className={label ? 'grid gap-1' : ''}>
        {label && <Label {...labelProps}>{label}</Label>}

        <div {...containerProps}>
          {leftAddon && (
            <div className="absolute left-0 ms-2 flex h-8 w-8 items-center justify-center p-2">
              {leftAddon}
            </div>
          )}

          <input {...props} />

          {rightAddon && (
            <div className="absolute right-0 me-2 flex h-8 w-8 items-center justify-center p-2">
              {rightAddon}
            </div>
          )}
        </div>
      </div>
    )
  }
)
Input.displayName = 'Input'
