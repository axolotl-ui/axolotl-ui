'use client'

import type React from 'react'

import { css, style, cn, useOptions } from '@axolotl-ui/core'

import type { InputProps } from '@/input/types'
import { Label, type LabelProps } from '@/label'

const inputStyles = css({
  display: 'flex',

  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  height: '$12',

  transitionProperty: 'all',
  transitionDuration: '300ms',
  transitionTimingFunction: 'ease-in-out',

  borderRadius: '$2xl',

  '&::placeholder': {
    color: '$on_off'
  },

  variants: {
    variant: {
      solid: {
        backgroundColor: '$container',
        color: '$on_container',

        '&:hover': {
          backgroundColor: '$container_hover'
        }
      },

      outlined: {
        backgroundColor: '$background',
        color: '$on_background',

        borderWidth: '$default',
        borderColor: '$border',
        borderStyle: 'solid',

        '&:hover': {
          backgroundColor: '$background_hover',
          borderColor: '$border_hover'
        }
      }
    }
  }
})

export const Input: React.FC<InputProps> = (inputProps: InputProps): React.ReactNode => {
  const {
    options: { components }
  } = useOptions()

  const {
    children,
    className,
    id,

    variant = 'outlined',

    leftAddon,
    rightAddon,

    label,
    labelProps,

    ...props
  }: InputProps = { ...components.all, ...components?.Input, ...inputProps }

  const addonStyles = {
    position: 'absolute',
    display: 'flex',

    justifyContent: 'center',
    alignItems: 'center',

    height: '$8',
    width: '$8',

    padding: '$2'
  }

  return (
    <div
      className={
        label
          ? style({
              display: 'grid',

              gap: '$1'
            })
          : ''
      }
    >
      {label && (
        <Label
          {...labelProps}
          className={cn(components?.Input?.labelProps?.className, labelProps?.className)}
          htmlFor={id}
        >
          {label}
        </Label>
      )}

      <div
        className={css({
          position: 'relative',
          display: 'flex',

          justifyContent: 'center',
          alignItems: 'center',

          width: '100%',
          height: 'min-content',

          variants: {
            variant: {
              solid: {
                color: '$on_container'
              },

              outlined: {
                color: '$on_background'
              }
            }
          }
        })({ variant })}
      >
        {leftAddon && (
          <div
            className={style({
              ...addonStyles,

              left: 0,

              marginInlineStart: '$2'
            })}
          >
            {leftAddon}
          </div>
        )}

        <input
          {...props}
          className={cn(
            inputStyles({ variant }),
            style({
              paddingInlineStart:
                (leftAddon && rightAddon) || (leftAddon && !rightAddon) ? '$10' : '$4',

              paddingInlineEnd:
                (leftAddon && rightAddon) || (!leftAddon && rightAddon) ? '$10' : '$4'
            }),
            components?.all?.className,
            components?.Input?.className,
            className
          )}
        />

        {rightAddon && (
          <div
            className={style({
              ...addonStyles,

              right: 0,

              marginInlineEnd: '$2'
            })}
          >
            {rightAddon}
          </div>
        )}
      </div>
    </div>
  )
}
Input.displayName = 'Input'
