/** @type {import("next").NextConfig} */
export default {
  swcMinify: true,
  transpilePackages: ["@axolotl-ui/core", "@axolotl-ui/components"],
  compiler: {
    emotion: true,
  },
};
