'use client'

import React, { type ElementType, type ReactNode } from 'react'

import { useOptions, type Components, type VariantProps } from '@axolotl-ui/core'
import { textStyles } from '@/text/text'

import type { LabelProps } from '@/label/types'

export type LabelStyles = VariantProps<typeof labelStyles>

export const labelStyles = textStyles

export const Label = <T extends ElementType = 'label'>(opts: LabelProps<T>): ReactNode => {
  const { options } = useOptions()

  const { all, Label }: Components = options.extend.components

  const {
    component: Component = 'label',
    children,
    className,
    color = 'accent1',
    ...props
  }: LabelProps<T> = { ...all, ...Label, ...opts }

  return (
    <Component
      {...props}
      color={color}
      className={labelStyles({
        className: [all?.className, Label?.className, className]
      })}
    >
      {children}
    </Component>
  )
}
Label.displayName = 'Label'
