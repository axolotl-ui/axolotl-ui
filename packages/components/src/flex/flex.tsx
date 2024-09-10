'use client'

import type React from 'react'
import { Children, cloneElement, isValidElement, type ReactElement } from 'react'

import { css, cn, useOptions } from '@axolotl-ui/core'

import type { FlexProps } from '@/flex/types'

const flexStyles = css({
  display: 'flex'
})

export const Flex: React.FC<FlexProps> = (flexProps: FlexProps): React.ReactNode => {
  const {
    options: { components }
  } = useOptions()

  const { children, asChild, className, ...restProps }: FlexProps = {
    ...components.all,
    ...components?.Flex,
    ...flexProps
  }

  const props: FlexProps = {
    className: cn(flexStyles(), components?.all?.className, components?.Flex?.className, className),

    ...restProps
  }

  if (children && asChild) {
    if (!isValidElement(children)) {
      throw new Error('Invalid children on Flex!')
    }

    if (Children.count(children) > 1) {
      console.warn(
        'More than one children on Flex when `asChild` is true! Selecting the first one.'
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

  return <div {...props}>{children}</div>
}
Flex.displayName = 'Flex'
