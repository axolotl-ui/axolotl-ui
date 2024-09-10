import type { Options } from "tsup";

export const config = (opts: Options): Options => {
  return {
    terserOptions: {
      compress: {
        directives: false,
      },
    },
    format: ["esm"],
    external: ["react", "react-dom"],
    target: "esnext",
    minifyIdentifiers: !opts.watch,
    minifySyntax: !opts.watch,
    minifyWhitespace: !opts.watch,
    platform: "browser",
    treeshake: false,
    minify: opts.watch ? false : "terser",
    clean: !opts.watch,
    splitting: true,
    sourcemap: !opts.watch,
    dts: true,
  } as Options;
};
