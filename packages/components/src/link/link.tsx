'use client'

import type React from 'react'
import { Children, cloneElement, isValidElement, type ReactElement } from 'react'

import { css, cn, useOptions } from '@axolotl-ui/core'

import type { LinkProps } from '@/link/types'

const linkStyles = css({
  cursor: 'pointer',

  transitionProperty: 'all',
  transitionDuration: '300ms',
  transitionTimingFunction: 'ease-in-out',

  fontWeight: '$medium',

  color: '$on_background',

  textDecorationLine: 'underline',

  '&:hover': {
    color: '$on_background_hover'
  }
})

export const Link: React.FC<LinkProps> = (linkProps: LinkProps): React.ReactNode => {
  const {
    options: { components }
  } = useOptions()

  const { children, asChild, className, ...restProps }: LinkProps = {
    ...components.all,
    ...components?.Link,
    ...linkProps
  }

  const props: LinkProps = {
    className: cn(linkStyles(), components?.all?.className, components?.Link?.className, className),

    ...restProps
  }

  if (children && asChild) {
    if (!isValidElement(children)) {
      throw new Error('Invalid children on Link!')
    }

    if (Children.count(children) > 1) {
      console.warn(
        'More than one children on Link when `asChild` is true! Selecting the first one.'
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
Link.displayName = 'Link'
