'use client'

import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  type ReactElement,
  type ReactNode,
  type Ref
} from 'react'

import { textStyles } from '@/text/text'
import { useOptions, type Components, type VariantProps } from '@axolotl-ui/core'

import type { LabelProps, LabelRef } from '@/label/types'

export type LabelStyles = VariantProps<typeof labelStyles>

export const labelStyles = textStyles

export const Label = forwardRef<LabelRef, LabelProps>(
  (opts: LabelProps, ref: Ref<LabelRef>): ReactNode => {
    const { options } = useOptions()

    const { all, Label }: Components = options.extend.components

    const {
      children,
      asChild,
      className,
      color = 'accent1',
      variant,
      ...restOpts
    }: LabelProps = { ...all, ...Label, ...opts }

    const props: LabelProps = {
      ...restOpts,
      ref,
      color,
      className: labelStyles({
        variant,
        className: [all?.className, Label?.className, className]
      })
    }

    if (children && asChild) {
      if (!isValidElement(children)) {
        throw new Error('Invalid children on Label!')
      }

      if (Children.count(children) > 1) {
        console.warn(
          'More than one children on Label when `asChild` is true! Selecting the first one.'
        )
      }

      const _children: ReactElement = (
        Children.count(children) > 1 ? Children.toArray(children)[0] : children
      ) as ReactElement

      return cloneElement(_children, {
        ...props,
        ..._children.props
      })
    }

    return <label {...props}>{children}</label>
  }
)
Label.displayName = 'Label'
