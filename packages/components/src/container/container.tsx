'use client'

import type React from 'react'
import { Children, cloneElement, isValidElement, type ReactElement } from 'react'

import { css, cn, useOptions } from '@axolotl-ui/core'

import type { ContainerProps } from '@/container/types'

const containerStyles = css({
  paddingX: '$2',
  margin: '0 auto',

  width: '100%',
  maxWidth: `${(11 / 12) * 100}%`,

  '@md': {
    maxWidth: `${(10 / 12) * 100}%`
  },

  '@lg': {
    maxWidth: `${(9 / 12) * 100}%`
  }
})

export const Container: React.FC<ContainerProps> = (
  containerProps: ContainerProps
): React.ReactNode => {
  const {
    options: { components }
  } = useOptions()

  const { children, asChild, className, ...restProps }: ContainerProps = {
    ...components.all,
    ...components?.Container,
    ...containerProps
  }

  const props: ContainerProps = {
    className: cn(
      containerStyles(),
      components?.all?.className,
      components?.Container?.className,
      className
    ),

    ...restProps
  }

  if (children && asChild) {
    if (!isValidElement(children)) {
      throw new Error('Invalid children on Container!')
    }

    if (Children.count(children) > 1) {
      console.warn(
        'More than one children on Container when `asChild` is true! Selecting the first one.'
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
Container.displayName = 'Container'
