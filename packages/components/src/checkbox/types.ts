import type { ComponentProps } from 'react'

import type { CheckboxStyles } from '@/checkbox/checkbox'
import type { LabelProps } from '@/label/types'
import type { GlobalProps } from '@/types'

export type CheckboxLabelProps = Omit<LabelProps, 'children'>

export type CheckboxRef = HTMLInputElement
export type CheckboxProps = {
  labelProps?: CheckboxLabelProps
  label?: LabelProps['children']
} & GlobalProps &
  ComponentProps<'input'> &
  CheckboxStyles

declare module '@axolotl-ui/core' {
  export interface Components {
    Checkbox: CheckboxProps
  }
}
