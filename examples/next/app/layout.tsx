import React from 'react'

import { AxolotlUI } from '@axolotl-ui/core'
import { Outfit } from 'next/font/google'

import type { Metadata } from 'next'

import '@/app/globals.css'

export const metadata: Metadata = {
  title: 'AxolotlUI examples'
}

type LayoutProps = {
  children: React.ReactNode
}

const outfit = Outfit({
  variable: '--font-main',
  subsets: ['latin']
})

const RootLayout: React.FC<LayoutProps> = ({ children }: LayoutProps): React.ReactNode => {
  return (
    <html className={outfit.className} suppressHydrationWarning lang="en">
      <body>
        <AxolotlUI>{children}</AxolotlUI>
      </body>
    </html>
  )
}

export default RootLayout
