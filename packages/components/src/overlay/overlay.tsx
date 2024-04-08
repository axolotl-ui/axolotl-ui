'use client'

import { forwardRef, type ReactNode, type Ref } from 'react'

import { cx, useOptions, type Components } from '@axolotl-ui/core'
import { AnimatePresence, motion, type Variants } from 'framer-motion'

import type { OverlayProps, OverlayRef } from '@/overlay/types'

const overlayAnimationVariants: Variants = {
  open: {
    opacity: 1,
    backdropFilter: 'blur(4px)',
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  },
  closed: {
    opacity: 0,
    backdropFilter: 'blur(0)',
    transition: {
      duration: 0.3,
      ease: 'easeIn'
    }
  }
}

export const Overlay = forwardRef<OverlayRef, OverlayProps>(
  (opts: OverlayProps, ref: Ref<OverlayRef>): ReactNode => {
    const { options } = useOptions()

    const { all, Overlay }: Components = options.extend.components

    const {
      children,
      className,
      color = 'info',
      onClick,
      open,
      setOpen,
      ...restOpts
    }: OverlayProps = { ...all, ...Overlay, ...opts }

    const props: Omit<OverlayProps, 'open' | 'setOpen'> = {
      ...restOpts,
      ref,
      color,
      variants: overlayAnimationVariants,
      initial: 'closed',
      animate: 'open',
      exit: 'closed',
      key: Math.random(),
      onClick: (e) => {
        setOpen(false)

        onClick?.(e)
      },
      className: cx(
        'bg-black/50',
        'fixed',
        'z-10',
        'h-screen w-screen',
        all?.className,
        Overlay?.className,
        className
      )
    }

    return (
      <AnimatePresence mode="wait">
        {open && <motion.div {...props}>{children}</motion.div>}
      </AnimatePresence>
    )
  }
)
Overlay.displayName = 'Overlay'
