'use client'

import React, { useState, type ReactNode } from 'react'

import { ComponentsProvider } from '@axolotl-ui/components'
import { useOptions } from '@axolotl-ui/core'
import { generateOptions } from '@/utils/options'
import { OptionsProvider } from '@/contexts/options'
import { CSSVariablesProvider } from '@/providers/css'
import { ThemeProvider } from 'next-themes'

import type { Optional } from '@/types/other'
import type { Options } from '@/types/options'

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
            <ComponentsProvider>
              <div className="axolotl-content text-primary-on bg-primary z-[1] h-max w-max">
                {children}
              </div>
            </ComponentsProvider>
          </ThemeProvider>
        </CSSVariablesProvider>
      ) : (
        children
      )}
    </OptionsProvider>
  )
}
