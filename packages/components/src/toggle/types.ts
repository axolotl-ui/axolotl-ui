import type { ComponentProps, RefAttributes } from 'react'

import type { GlobalProps } from '@/types'
import type { ToggleHandleStyles, ToggleStyles } from '@/toggle/toggle'
import type { LabelProps } from '@/label/types'

export type ToggleLabelProps = Omit<LabelProps, 'children'>
export type ToggleHandleProps = GlobalProps &
  ComponentProps<'div'> &
  RefAttributes<'div'> &
  ToggleHandleStyles

export type ToggleProps = {
  labelProps?: ToggleLabelProps
  label?: LabelProps['children']
  handleProps?: ToggleHandleProps
} & GlobalProps &
  ComponentProps<'input'> &
  RefAttributes<'input'> &
  ToggleStyles

declare module '@axolotl-ui/core' {
  export interface Components {
    Toggle: ToggleProps
  }
}
