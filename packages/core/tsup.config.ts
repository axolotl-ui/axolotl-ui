import { defineConfig, type Options } from 'tsup'
import { config } from '../../tsup.config'

export default defineConfig((opts: Options) => {
  const cfg = config(opts)

  return {
    external: [...(cfg.external as string[]), 'tailwindcss', 'next'],
    ...cfg
  }
})
