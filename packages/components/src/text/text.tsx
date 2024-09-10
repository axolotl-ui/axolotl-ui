'use client'

import type React from 'react'
import { Children, cloneElement, isValidElement, type ReactElement } from 'react'

import { css, cn, useOptions } from '@axolotl-ui/core'

import type { TextProps } from '@/text/types'

const textStyles = css({
  color: '$on_background',

  transitionProperty: 'color, background-color, border-color',
  transitionDuration: '300ms',
  transitionTimingFunction: 'ease-in-out'
})

export const Text: React.FC<TextProps> = (textProps: TextProps): React.ReactNode => {
  const {
    options: { components }
  } = useOptions()

  const { children, asChild, className, ...restProps }: TextProps = {
    ...components.all,
    ...components?.Text,
    ...textProps
  }

  const props: TextProps = {
    className: cn(textStyles(), components?.all?.className, components?.Text?.className, className),

    ...restProps
  }

  if (children && asChild) {
    if (!isValidElement(children)) {
      throw new Error('Invalid children on Text!')
    }

    if (Children.count(children) > 1) {
      console.warn(
        'More than one children on Text when `asChild` is true! Selecting the first one.'
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

  return <p {...props}>{children}</p>
}
Text.displayName = 'Text'
