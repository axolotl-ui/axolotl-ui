import type { Config } from 'tailwindcss'

export const extend = (config: Config) => {
  const { content, theme, ...restConfig } = config
  const { extend: themeExtend, ...restTheme } = theme || {}
  const { colors, borderRadius, ...restThemeExtend } = themeExtend || {}

  return {
    content: [
      './node_modules/@axolotl-ui/core/dist/**/*.{js,mjs}',
      './node_modules/@axolotl-ui/components/dist/**/*.{js,mjs}',
      ...(content as [])
    ],
    theme: {
      extend: {
        colors: {
          border: {
            DEFAULT: 'var(--border)',
            hover: 'var(--border-hover)'
          },
          primary: {
            DEFAULT: 'var(--primary)',
            hover: 'var(--primary-hover)',
            on: 'var(--on-primary)'
          },
          secondary: {
            DEFAULT: 'var(--secondary)',
            hover: 'var(--secondary-hover)',
            on: 'var(--on-secondary)'
          },
          tertiary: {
            DEFAULT: 'var(--tertiary)',
            hover: 'var(--tertiary-hover)',
            on: 'var(--on-tertiary)'
          },
          bright: {
            DEFAULT: 'var(--bright)',
            hover: 'var(--bright-hover)',
            on: 'var(--on-bright)'
          },
          5: 'var(--accent1-4)',
          8: 'var(--accent1-7)',
          10: 'var(--accent1-10)',
          13: 'var(--accent1-13)',
          15: 'var(--accent1-15)',
          18: 'var(--accent1-18)',
          20: 'var(--accent1-20)',
          30: 'var(--accent1-30)',
          40: 'var(--accent1-40)',
          50: 'var(--accent1-50)',
          60: 'var(--accent1-60)',
          70: 'var(--accent1-70)',
          80: 'var(--accent1-80)',
          83: 'var(--accent1-83)',
          86: 'var(--accent1-86)',
          89: 'var(--accent1-89)',
          90: 'var(--accent1-90)',
          93: 'var(--accent1-93)',
          95: 'var(--accent1-95)',
          98: 'var(--accent1-98)',
          accent2: {
            border: {
              DEFAULT: 'var(--accent2-border)',
              hover: 'var(--accent2-border-hover)'
            },
            primary: {
              DEFAULT: 'var(--accent2-primary)',
              hover: 'var(--accent2-primary-hover)',
              on: 'var(--accent2-on-primary)'
            },
            secondary: {
              DEFAULT: 'var(--accent2-secondary)',
              hover: 'var(--accent2-secondary-hover)',
              on: 'var(--accent2-on-secondary)'
            },
            tertiary: {
              DEFAULT: 'var(--accent2-tertiary)',
              hover: 'var(--accent2-tertiary-hover)',
              on: 'var(--accent2-on-tertiary)'
            },
            bright: {
              DEFAULT: 'var(--accent2-bright)',
              hover: 'var(--accent2-bright-hover)',
              on: 'var(--accent2-on-bright)'
            },
            5: 'var(--accent2-4)',
            8: 'var(--accent2-7)',
            10: 'var(--accent2-10)',
            13: 'var(--accent2-13)',
            15: 'var(--accent2-15)',
            18: 'var(--accent2-18)',
            20: 'var(--accent2-20)',
            30: 'var(--accent2-30)',
            40: 'var(--accent2-40)',
            50: 'var(--accent2-50)',
            60: 'var(--accent2-60)',
            70: 'var(--accent2-70)',
            80: 'var(--accent2-80)',
            83: 'var(--accent2-83)',
            86: 'var(--accent2-86)',
            89: 'var(--accent2-89)',
            90: 'var(--accent2-90)',
            93: 'var(--accent2-93)',
            95: 'var(--accent2-95)',
            98: 'var(--accent2-98)'
          },
          neutral: {
            border: {
              DEFAULT: 'var(--neutral-border)',
              hover: 'var(--neutral-border-hover)'
            },
            primary: {
              DEFAULT: 'var(--neutral-primary)',
              hover: 'var(--neutral-primary-hover)',
              on: 'var(--neutral-on-primary)'
            },
            secondary: {
              DEFAULT: 'var(--neutral-secondary)',
              hover: 'var(--neutral-secondary-hover)',
              on: 'var(--neutral-on-secondary)'
            },
            tertiary: {
              DEFAULT: 'var(--neutral-tertiary)',
              hover: 'var(--neutral-tertiary-hover)',
              on: 'var(--neutral-on-tertiary)'
            },
            bright: {
              DEFAULT: 'var(--neutral-bright)',
              hover: 'var(--neutral-bright-hover)',
              on: 'var(--neutral-on-bright)'
            },
            5: 'var(--neutral-4)',
            8: 'var(--neutral-7)',
            10: 'var(--neutral-10)',
            13: 'var(--neutral-13)',
            15: 'var(--neutral-15)',
            18: 'var(--neutral-18)',
            20: 'var(--neutral-20)',
            30: 'var(--neutral-30)',
            40: 'var(--neutral-40)',
            50: 'var(--neutral-50)',
            60: 'var(--neutral-60)',
            70: 'var(--neutral-70)',
            80: 'var(--neutral-80)',
            83: 'var(--neutral-83)',
            86: 'var(--neutral-86)',
            89: 'var(--neutral-89)',
            90: 'var(--neutral-90)',
            93: 'var(--neutral-93)',
            95: 'var(--neutral-95)',
            98: 'var(--neutral-98)'
          },
          error: {
            border: {
              DEFAULT: 'var(--error-border)',
              hover: 'var(--error-border-hover)'
            },
            primary: {
              DEFAULT: 'var(--error-primary)',
              hover: 'var(--error-primary-hover)',
              on: 'var(--error-on-primary)'
            },
            secondary: {
              DEFAULT: 'var(--error-secondary)',
              hover: 'var(--error-secondary-hover)',
              on: 'var(--error-on-secondary)'
            },
            tertiary: {
              DEFAULT: 'var(--error-tertiary)',
              hover: 'var(--error-tertiary-hover)',
              on: 'var(--error-on-tertiary)'
            },
            bright: {
              DEFAULT: 'var(--error-bright)',
              hover: 'var(--error-bright-hover)',
              on: 'var(--error-on-bright)'
            },
            5: 'var(--error-4)',
            8: 'var(--error-7)',
            10: 'var(--error-10)',
            13: 'var(--error-13)',
            15: 'var(--error-15)',
            18: 'var(--error-18)',
            20: 'var(--error-20)',
            30: 'var(--error-30)',
            40: 'var(--error-40)',
            50: 'var(--error-50)',
            60: 'var(--error-60)',
            70: 'var(--error-70)',
            80: 'var(--error-80)',
            83: 'var(--error-83)',
            86: 'var(--error-86)',
            89: 'var(--error-89)',
            90: 'var(--error-90)',
            93: 'var(--error-93)',
            95: 'var(--error-95)',
            98: 'var(--error-98)'
          },
          warn: {
            border: {
              DEFAULT: 'var(--warn-border)',
              hover: 'var(--warn-border-hover)'
            },
            primary: {
              DEFAULT: 'var(--warn-primary)',
              hover: 'var(--warn-primary-hover)',
              on: 'var(--warn-on-primary)'
            },
            secondary: {
              DEFAULT: 'var(--warn-secondary)',
              hover: 'var(--warn-secondary-hover)',
              on: 'var(--warn-on-secondary)'
            },
            tertiary: {
              DEFAULT: 'var(--warn-tertiary)',
              hover: 'var(--warn-tertiary-hover)',
              on: 'var(--warn-on-tertiary)'
            },
            bright: {
              DEFAULT: 'var(--warn-bright)',
              hover: 'var(--warn-bright-hover)',
              on: 'var(--warn-on-bright)'
            },
            5: 'var(--warn-4)',
            8: 'var(--warn-7)',
            10: 'var(--warn-10)',
            13: 'var(--warn-13)',
            15: 'var(--warn-15)',
            18: 'var(--warn-18)',
            20: 'var(--warn-20)',
            30: 'var(--warn-30)',
            40: 'var(--warn-40)',
            50: 'var(--warn-50)',
            60: 'var(--warn-60)',
            70: 'var(--warn-70)',
            80: 'var(--warn-80)',
            83: 'var(--warn-83)',
            86: 'var(--warn-86)',
            89: 'var(--warn-89)',
            90: 'var(--warn-90)',
            93: 'var(--warn-93)',
            95: 'var(--warn-95)',
            98: 'var(--warn-98)'
          },
          success: {
            border: {
              DEFAULT: 'var(--success-border)',
              hover: 'var(--success-border-hover)'
            },
            primary: {
              DEFAULT: 'var(--success-primary)',
              hover: 'var(--success-primary-hover)',
              on: 'var(--success-on-primary)'
            },
            secondary: {
              DEFAULT: 'var(--success-secondary)',
              hover: 'var(--success-secondary-hover)',
              on: 'var(--success-on-secondary)'
            },
            tertiary: {
              DEFAULT: 'var(--success-tertiary)',
              hover: 'var(--success-tertiary-hover)',
              on: 'var(--success-on-tertiary)'
            },
            bright: {
              DEFAULT: 'var(--success-bright)',
              hover: 'var(--success-bright-hover)',
              on: 'var(--success-on-bright)'
            },
            5: 'var(--success-4)',
            8: 'var(--success-7)',
            10: 'var(--success-10)',
            13: 'var(--success-13)',
            15: 'var(--success-15)',
            18: 'var(--success-18)',
            20: 'var(--success-20)',
            30: 'var(--success-30)',
            40: 'var(--success-40)',
            50: 'var(--success-50)',
            60: 'var(--success-60)',
            70: 'var(--success-70)',
            80: 'var(--success-80)',
            83: 'var(--success-83)',
            86: 'var(--success-86)',
            89: 'var(--success-89)',
            90: 'var(--success-90)',
            93: 'var(--success-93)',
            95: 'var(--success-95)',
            98: 'var(--success-98)'
          },
          info: {
            border: {
              DEFAULT: 'var(--info-border)',
              hover: 'var(--info-border-hover)'
            },
            primary: {
              DEFAULT: 'var(--info-primary)',
              hover: 'var(--info-primary-hover)',
              on: 'var(--info-on-primary)'
            },
            secondary: {
              DEFAULT: 'var(--info-secondary)',
              hover: 'var(--info-secondary-hover)',
              on: 'var(--info-on-secondary)'
            },
            tertiary: {
              DEFAULT: 'var(--info-tertiary)',
              hover: 'var(--info-tertiary-hover)',
              on: 'var(--info-on-tertiary)'
            },
            bright: {
              DEFAULT: 'var(--info-bright)',
              hover: 'var(--info-bright-hover)',
              on: 'var(--info-on-bright)'
            },
            5: 'var(--info-4)',
            8: 'var(--info-7)',
            10: 'var(--info-10)',
            13: 'var(--info-13)',
            15: 'var(--info-15)',
            18: 'var(--info-18)',
            20: 'var(--info-20)',
            30: 'var(--info-30)',
            40: 'var(--info-40)',
            50: 'var(--info-50)',
            60: 'var(--info-60)',
            70: 'var(--info-70)',
            80: 'var(--info-80)',
            83: 'var(--info-83)',
            86: 'var(--info-86)',
            89: 'var(--info-89)',
            90: 'var(--info-90)',
            93: 'var(--info-93)',
            95: 'var(--info-95)',
            98: 'var(--info-98)'
          },
          ...colors
        },
        borderRadius: {
          '2xl': 'calc(var(--radius) + 8px)',
          xl: 'calc(var(--radius) + 4px)',
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 4px)',
          sm: 'calc(var(--radius) - 8px)',
          xs: 'calc(var(--radius) - 12px)',
          ...borderRadius
        },
        ...restThemeExtend
      },
      ...restTheme
    },
    ...restConfig
  } as Config
}
