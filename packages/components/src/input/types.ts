import type { ComponentProps, ReactNode, RefAttributes } from 'react'

import type { InputContainerStyles, InputStyles } from '@/input/input'
import type { LabelProps } from '@/label/types'
import type { GlobalProps } from '@/types'

export type InputLabelProps = Omit<LabelProps, 'children'>
export type InputContainerProps = Omit<
  GlobalProps & ComponentProps<'div'> & RefAttributes<'div'> & InputContainerStyles,
  'children'
>

export type InputRef = HTMLInputElement
export type InputProps = {
  labelProps?: InputLabelProps
  containerProps?: InputContainerProps
  label?: LabelProps['children']
  leftAddon?: ReactNode
  rightAddon?: ReactNode
} & GlobalProps &
  ComponentProps<'input'> &
  InputStyles

declare module '@axolotl-ui/core' {
  export interface Components {
    Input: InputProps
  }
}
