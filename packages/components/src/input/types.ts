import type { ComponentProps, ElementType, ReactNode, RefAttributes } from 'react'

import type { GlobalProps } from '@/types'
import type { InputStyles, InputContainerStyles } from '@/input/input'
import type { LabelProps } from '@/label/types'

export type InputLabelProps = Omit<LabelProps, 'component' | 'children'>
export type InputContainerProps = Omit<
  GlobalProps & ComponentProps<'div'> & RefAttributes<'div'> & InputContainerStyles,
  'children'
>

export type InputProps = {
  labelProps?: InputLabelProps
  containerProps?: InputContainerProps
  label?: LabelProps['children']
  leftAddon?: ReactNode
  rightAddon?: ReactNode
} & GlobalProps &
  ComponentProps<'input'> &
  RefAttributes<'input'> &
  InputStyles

declare module '@axolotl-ui/core' {
  export interface Components {
    Input: InputProps
  }
}
