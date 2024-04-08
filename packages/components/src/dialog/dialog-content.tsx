'use client'

import { forwardRef, type ReactNode, type Ref } from 'react'

import { useDialogContext } from '@/dialog/dialog-context'
import { Overlay } from '@/overlay/overlay'
import { cx, useOptions, type Components } from '@axolotl-ui/core'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { AnimatePresence, motion, type Variants } from 'framer-motion'

import type { DialogContentProps, DialogContentRef } from '@/dialog/types'

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

export const DialogContent = forwardRef<DialogContentRef, DialogContentProps>(
  (opts: DialogContentProps, ref: Ref<DialogContentRef>): ReactNode => {
    const { options } = useOptions()
    const { open, setOpen, name } = useDialogContext()

    const { all, DialogContent }: Components = options.extend.components

    const {
      children,
      className,
      color = 'accent2',
      ...restOpts
    }: DialogContentProps = { ...all, ...DialogContent, ...opts }

    const props: DialogContentProps = {
      ...restOpts,
      ref,
      color,
      initial: 'closed',
      animate: 'open',
      exit: 'closed',
      variants: dialogContentAnimationVariants,
      key: Math.random(),
      className: cx(
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
      )
    }

    return (
      <AnimatePresence mode="wait">
        {open && (
          <DialogPrimitive.Portal forceMount>
            <DialogPrimitive.Overlay asChild>
              <Overlay open={open} setOpen={setOpen} />
            </DialogPrimitive.Overlay>

            <DialogPrimitive.Content asChild>
              <motion.div {...props}>{children}</motion.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    )
  }
)
DialogContent.displayName = 'DialogContent'
