import { extend } from '@axolotl-ui/core'
import { fontFamily } from 'tailwindcss/defaultTheme'

import type { Config } from 'tailwindcss'

const config: Config = extend({
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-main)', ...fontFamily.sans]
      }
    }
  }
} satisfies Config)

export default config
