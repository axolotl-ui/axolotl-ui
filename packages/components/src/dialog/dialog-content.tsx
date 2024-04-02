'use client'

import React, { type ReactNode } from 'react'

import { cx, useOptions, type Components } from '@axolotl-ui/core'
import { useDialogContext } from '@/dialog/dialog-context'
import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { Overlay } from '@/overlay/overlay'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import type { DialogContentProps } from '@/dialog/types'

export const dialogContentAnimationVariants: Variants = {
  open: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  },
  closed: {
    scale: 0.9,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeIn'
    }
  }
}

export const DialogContent = (opts: DialogContentProps): ReactNode => {
  const { options } = useOptions()
  const { open, setOpen, name } = useDialogContext()

  const { all, DialogContent }: Components = options.extend.components

  const {
    children,
    className,
    color = 'accent2',
    ...props
  }: DialogContentProps = { ...all, ...DialogContent, ...opts }

  return (
    <AnimatePresence mode="wait">
      {open && (
        <DialogPrimitive.Portal forceMount>
          <DialogPrimitive.Overlay asChild>
            <Overlay open={open} onOpenChange={setOpen} />
          </DialogPrimitive.Overlay>

          <DialogPrimitive.Content asChild>
            <motion.div
              {...props}
              color={color}
              initial="closed"
              animate="open"
              exit="closed"
              variants={dialogContentAnimationVariants}
              className={cx(
                'text-primary-on bg-primary',
                'rounded-xl',
                'z-20',
                'absolute',
                'flex',
                'inset-x-0 inset-y-0',
                'overflow-y-scroll',
                'max-h-3/4 h-fit w-11/12',
                'mx-auto px-4 py-1.5',
                all?.className,
                DialogContent?.className,
                className
              )}
              key={name}
            >
              {children}
            </motion.div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      )}
    </AnimatePresence>
  )
}
DialogContent.displayName = 'DialogContent'
