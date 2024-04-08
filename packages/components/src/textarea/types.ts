import type { ComponentProps } from 'react'

import type { TextareaStyles } from '@/textarea/textarea'
import type { GlobalProps } from '@/types'

export type TextareaRef = HTMLTextAreaElement
export type TextareaProps = GlobalProps & ComponentProps<'textarea'> & TextareaStyles

declare module '@axolotl-ui/core' {
  export interface Components {
    Textarea: TextareaProps
  }
}
