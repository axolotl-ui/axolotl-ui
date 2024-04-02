'use client'

import React, { type ElementType, type ReactNode } from 'react'

import { cx, useOptions, type Components } from '@axolotl-ui/core'
import { Button } from '@/button/button'
import { useDialogContext } from '@/dialog/dialog-context'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import type { DialogTriggerProps } from '@/dialog/types'

export const DialogTrigger = <T extends ElementType = 'button'>(
  opts: DialogTriggerProps<T>
): ReactNode => {
  const { options } = useOptions()
  const { open, setOpen } = useDialogContext()

  const { all, DialogTrigger }: Components = options.extend.components

  const {
    children,
    className,
    color = 'accent1',
    ...props
  }: DialogTriggerProps<T> = { ...all, ...DialogTrigger, ...opts }

  return (
    <DialogPrimitive.Trigger
      {...props}
      as={Button}
      color={color}
      onClick={() => {
        setOpen(!open)
      }}
      className={cx(all?.className, DialogTrigger?.className, className)}
    >
      {children}
    </DialogPrimitive.Trigger>
  )
}
DialogTrigger.displayName = 'DialogTrigger'
