'use client'

import { forwardRef, type ReactNode, type Ref } from 'react'

import { useDialogContext } from '@/dialog/dialog-context'
import { cx, useOptions, type Components } from '@axolotl-ui/core'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import { Button } from '@/button/button'
import type { DialogTriggerProps, DialogTriggerRef } from '@/dialog/types'

export const DialogTrigger = forwardRef<DialogTriggerRef, DialogTriggerProps>(
  (opts: DialogTriggerProps, ref: Ref<DialogTriggerRef>): ReactNode => {
    const { options } = useOptions()
    const { open, setOpen } = useDialogContext()

    const { all, DialogTrigger }: Components = options.extend.components

    const {
      children,
      asChild,
      className,
      color = 'accent1',
      onClick,
      ...restOpts
    }: DialogTriggerProps = { ...all, ...DialogTrigger, ...opts }

    const props: DialogTriggerProps = {
      ...restOpts,
      asChild,
      ref,
      color,
      onClick: (e) => {
        setOpen(!open)

        onClick?.(e)
      },
      className: cx(all?.className, DialogTrigger?.className, className)
    }

    return (
      <DialogPrimitive.Trigger {...props} asChild>
        <Button>{children}</Button>
      </DialogPrimitive.Trigger>
    )
  }
)
DialogTrigger.displayName = 'DialogTrigger'
