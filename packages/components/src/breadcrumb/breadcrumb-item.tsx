'use client'

import React, { forwardRef, type ReactNode, type Ref } from 'react'

import { useOptions, type Components, type VariantProps, cx } from '@axolotl-ui/core'
import { Text, textStyles } from '@/text/text'

import type { BreadcrumbItemProps, BreadcrumbItemRef, BreadcrumbProps } from '@/breadcrumb/types'

export type BreadcrumbItemStyles = VariantProps<typeof breadcrumbStyles>

export const breadcrumbStyles = textStyles

export const BreadcrumbItem = forwardRef<BreadcrumbItemRef, BreadcrumbItemProps>(
  (opts: BreadcrumbItemProps, ref: Ref<BreadcrumbItemRef>): ReactNode => {
    const { options } = useOptions()

    const { all, BreadcrumbItem }: Components = options.extend.components

    const {
      children,
      className,
      color = 'accent1',
      separator,
      isLast,
      isFirst,
      active,
      ...restOpts
    }: BreadcrumbItemProps = { ...all, ...BreadcrumbItem, ...opts }

    const props: BreadcrumbItemProps = {
      ...restOpts,
      ref,
      color,
      className: cx('flex items-center', all?.className, BreadcrumbItem?.className, className)
    }

    return (
      <li {...props}>
        {!isFirst && (
          <Text color="neutral" className={cx('select-none', 'mx-1', 'text-sm')}>
            {separator}
          </Text>
        )}

        <Text
          color={isLast || active ? color : 'neutral'}
          className={breadcrumbStyles({
            variant: isLast || active ? 'primary' : 'secondary',
            className: ['flex items-center', (isLast || active) && 'font-bold']
          })}
        >
          {children}
        </Text>
      </li>
    )
  }
)
BreadcrumbItem.displayName = 'BreadcrumbItem'
