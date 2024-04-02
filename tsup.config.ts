import type { Options } from 'tsup'

export const config = (opts: Options): Options => {
  return {
    terserOptions: {
      compress: {
        directives: false
      }
    },
    format: ['esm'],
    external: ['react', 'react-dom', 'tailwindcss', 'next'],
    target: 'esnext',
    minifyIdentifiers: !opts.watch,
    minifySyntax: !opts.watch,
    minifyWhitespace: !opts.watch,
    platform: 'browser',
    treeshake: !opts.watch,
    minify: opts.watch ? false : 'terser',
    clean: !opts.watch,
    splitting: true,
    sourcemap: !opts.watch,
    cjsInterop: true,
    experimentalDts: true
  } as Options
}
