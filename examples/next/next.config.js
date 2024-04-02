/** @type {import('next').NextConfig} */
const config = {
  swcMinify: true,
  transpilePackages: ['@axolotl-ui/core', '@axolotl-ui/components']
}

module.exports = config
