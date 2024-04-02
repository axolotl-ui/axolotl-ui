import type { ComponentProps } from 'react'

import type { GlobalProps } from '@/types'
import type { CheckboxStyles } from '@/checkbox/checkbox'
import type { LabelProps } from '@/label/types'

export type CheckboxLabelProps = Omit<LabelProps, 'children'>

export type CheckboxProps = {
  labelProps?: CheckboxLabelProps
  label?: LabelProps['children']
} & GlobalProps &
  ComponentProps<'input'> &
  CheckboxStyles

export type CheckboxRef = HTMLInputElement

declare module '@axolotl-ui/core' {
  export interface Components {
    Checkbox: CheckboxProps
  }
}
