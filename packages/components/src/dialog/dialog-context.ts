'use client'

import { createContext } from '@axolotl-ui/core'

export type DialogContextProps = {
  name: string
  open: boolean
  setOpen: (open: boolean) => void
}

export const [DialogProvider, useDialogContext] = createContext<DialogContextProps>({
  name: 'DialogContext',
  defaultValue: null
})
