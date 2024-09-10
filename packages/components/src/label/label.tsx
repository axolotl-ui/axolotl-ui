'use client'

import type React from 'react'
import { Children, cloneElement, isValidElement, type ReactElement } from 'react'

import { css, cn, useOptions } from '@axolotl-ui/core'

import type { LabelProps } from '@/label/types'

const labelStyles = css({
  color: '$on_background',

  fontWeight: '$medium',

  transitionProperty: 'color, background-color, border-color',
  transitionDuration: '300ms',
  transitionTimingFunction: 'ease-in-out'
})

export const Label: React.FC<LabelProps> = (labelProps: LabelProps): React.ReactNode => {
  const {
    options: { components }
  } = useOptions()

  const { children, asChild, className, ...restProps }: LabelProps = {
    ...components.all,
    ...components?.Label,
    ...labelProps
  }

  const props: LabelProps = {
    className: cn(
      labelStyles(),
      components?.all?.className,
      components?.Label?.className,
      className
    ),

    ...restProps
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
Label.displayName = 'Label'
