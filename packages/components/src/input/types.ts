import type { ComponentProps, ReactNode } from 'react'

import type { GlobalComponentProps } from '@/types'
import type { LabelProps } from '@/label/types'

export type InputStyeProps = {
  variant?: 'solid' | 'outlined'
}

export type InputRef = HTMLInputElement
export type InputProps = {
  children?: ReactNode

  leftAddon?: ReactNode
  rightAddon?: ReactNode

  label?: LabelProps['children']
  labelProps?: Omit<LabelProps, 'children'>
} & InputStyeProps &
  GlobalComponentProps &
  ComponentProps<'input'>

declare module '@axolotl-ui/core' {
  export interface Components {
    Input?: InputProps
  }
}
