'use client'

import React, { useState, type ReactNode } from 'react'

import { OptionsProvider, useOptions } from '@/contexts/options'
import { CSSVariablesProvider } from '@/providers/css'
import { generateOptions } from '@/utils/options'
import { ThemeProvider } from 'next-themes'

import type { Options } from '@/types/options'
import type { Optional } from '@/types/other'

export type AxolotlUIProps = {
  children: React.ReactNode
  options?: Optional<Options>
  global?: boolean
}

export const AxolotlUI: React.FC<AxolotlUIProps> = ({
  children,
  options: userOptions,
  global: _global
}: AxolotlUIProps): ReactNode => {
  const [options, setOptions] = useState<Options>(generateOptions(userOptions))

  let global: boolean = true

  if (_global === undefined || _global === null) {
    try {
      const ctx = useOptions()?.options?.theme

      if (ctx) {
        global = false
      } else {
        global = true
      }
    } catch {
      global = true
    }
  } else {
    global = _global
  }

  return (
    <OptionsProvider value={{ options, setOptions }}>
      {global ? (
        <CSSVariablesProvider>
          <ThemeProvider
            forcedTheme={options.theme === 'system' ? undefined : options.theme}
            enableSystem={options.theme === 'system'}
            attribute="class"
            disableTransitionOnChange
          >
            <div className="axolotl-content text-primary-on bg-primary z-[1] h-full w-full">
              {children}
            </div>
          </ThemeProvider>
        </CSSVariablesProvider>
      ) : (
        children
      )}
    </OptionsProvider>
  )
}
