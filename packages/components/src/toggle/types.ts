import type { ComponentProps } from 'react'

import type { LabelProps } from '@/label/types'
import type { ToggleHandleStyles, ToggleStyles } from '@/toggle/toggle'
import type { GlobalProps } from '@/types'

export type ToggleLabelProps = Omit<LabelProps, 'children'>

export type ToggleHandleProps = GlobalProps & ComponentProps<'div'> & ToggleHandleStyles

export type ToggleRef = HTMLInputElement
export type ToggleProps = {
  labelProps?: ToggleLabelProps
  label?: LabelProps['children']
  handleProps?: ToggleHandleProps
  on?: boolean
  setOn?: (on: boolean) => void
} & GlobalProps &
  ComponentProps<'input'> &
  ToggleStyles

declare module '@axolotl-ui/core' {
  export interface Components {
    Toggle: ToggleProps
  }
}
