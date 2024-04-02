'use client'

import React, { type ReactNode } from 'react'

import { cx, useOptions, type Components } from '@axolotl-ui/core'
import { AnimatePresence, motion, type Variants } from 'framer-motion'

import type { OverlayProps } from '@/overlay/types'
import { createPortal } from 'react-dom'

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

export const Overlay = (opts: OverlayProps): ReactNode => {
  const { options } = useOptions()

  const { all, Overlay }: Components = options.extend.components

  const {
    children,
    className,
    color = 'info',
    open,
    onOpenChange,
    ...props
  }: OverlayProps = { ...all, ...Overlay, ...opts }

  return (
    <AnimatePresence mode="wait">
      {open &&
        createPortal(
          <motion.div
            {...props}
            onClick={() => {
              onOpenChange(false)
            }}
            color={color}
            variants={overlayAnimationVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className={cx(
              'bg-black/50',
              'fixed',
              'z-10',
              'h-screen w-screen',
              all?.className,
              Overlay?.className,
              className
            )}
            key={Math.random()}
          >
            {children}
          </motion.div>,
          document.body
        )}
    </AnimatePresence>
  )
}
Overlay.displayName = 'Overlay'
