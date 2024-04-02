'use client'

import React, { useId, useState, type ReactNode } from 'react'

import { useOptions, type Components } from '@axolotl-ui/core'
import { DialogProvider } from '@/dialog/dialog-context'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import type { DialogProps } from '@/dialog/types'

export const Dialog = (opts: DialogProps): ReactNode => {
  const { options } = useOptions()

  const { all, Dialog }: Components = options.extend.components

  const {
    children,
    open: controlledOpen,
    setOpen: setControlledOpen,
    initial = false
  }: DialogProps = { ...all, ...Dialog, ...opts }

  const [uncontrolledOpen, setUncontrolledOpen] = useState<boolean>(initial)

  const open = controlledOpen ?? uncontrolledOpen
  const setOpen = setControlledOpen ?? setUncontrolledOpen

  return (
    <DialogProvider
      value={{
        name: `dialog-${useId()}`,
        open,
        setOpen
      }}
    >
      <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
        {children}
      </DialogPrimitive.Root>
    </DialogProvider>
  )
}
Dialog.displayName = 'Dialog'
