'use client'

import { createContext } from '@/hooks/createContext'

import type { Options } from '@/types/options'

export type OptionsContextProps = {
  options: Options
  setOptions: (options: Options) => void
}

export const [OptionsProvider, useOptions] = createContext<OptionsContextProps>({
  name: 'OptionsContext',
  defaultValue: null
})
