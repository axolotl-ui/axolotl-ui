import { extend } from '@axolotl-ui/core'

import type { Config } from 'tailwindcss'

const config: Config = extend({
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}']
})

export default config
