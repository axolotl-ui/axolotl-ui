'use client'

import { useState, type ReactNode } from 'react'

import { Label } from '@/label/label'
import { cva, cx, useOptions, type Components, type VariantProps } from '@axolotl-ui/core'

import type { ToggleLabelProps, ToggleProps } from '@/toggle/types'

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
    labelProps: labelOpts,
    handleProps: handleOpts,

    label,
    on: controlledOn,
    setOn: setControlledOn,
    onChange,
    className,
    color = 'accent1',
    ...restOpts
  }: ToggleProps = {
    ...all,
    ...Toggle,
    ...opts
  }

  const { color: labelColor = color, ...restLabelProps } = {
    ...all,
    ...Toggle?.labelProps,
    ...labelOpts
  }

  const { color: handleColor = color, ...restHandleProps } = {
    ...all,
    ...Toggle?.handleProps,
    ...handleOpts
  }

  const [uncontrolledOn, setUncontrolledOn] = useState<boolean>(false)

  const on = controlledOn ?? uncontrolledOn
  const setOn = setControlledOn ?? setUncontrolledOn

  const props: ToggleProps = {
    ...restOpts,
    checked: on,
    onChange: (e) => {
      setOn(!on)

      onChange?.(e)
    },
    type: 'checkbox',
    className: 'sr-only'
  }

  const labelProps: ToggleLabelProps = {
    ...restLabelProps,
    color: labelColor,
    className: cx(
      'flex w-fit items-center gap-2',
      all?.className,
      Toggle?.labelProps?.className,
      labelOpts?.className
    )
  }

  const handleProps: ToggleHandleStyles = {
    ...restHandleProps,
    color: handleColor,
    className: toggleHandleStyles({
      on,
      className: [all?.className, Toggle?.handleProps?.className, handleOpts?.className]
    })
  }

  return (
    <Label {...labelProps}>
      <input {...props} />

      <div
        {...props}
        color={color}
        className={toggleStyles({
          on,
          className: [all?.className, Toggle?.className, className]
        })}
      >
        <div {...(handleProps as any)} />
      </div>

      {label}
    </Label>
  )
}
Toggle.displayName = 'Toggle'
