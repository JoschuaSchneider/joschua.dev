module.exports = {
  dark: 'media',
  experimental: {
    darkModeVariant: true,
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: [
    './components/**/*.tsx',
    './pages/**/*.tsx',
    './pages/**/*.mdx',
    './layouts/**/*.tsx',
  ],
  theme: {
    extend: {},
    // Typography overwrites, mainly for blog content
    typography: (theme) => ({
      default: {
        css: {
          h1: {
            color: theme('colors.black'),
            fontWeight: '700',
          },
          h2: {
            color: theme('colors.black'),
            fontWeight: '700',
          },
          h3: {
            color: theme('colors.black'),
            fontWeight: '600',
          },
          h4: {
            color: theme('colors.black'),
            fontWeight: '600',
          },
          strong: {
            color: theme('colors.gray.800'),
            fontWeight: '700',
          },
          a: {
            color: theme('colors.indigo.700'),
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          },

          // Remove additional quotes
          code: {
            fontWeight: '600',
          },
          'code::before': {
            content: false,
          },
          'code::after': {
            content: false,
          },
          'pre code::before': {
            content: false,
          },
          'pre code::after': {
            content: false,
          },
          pre: {
            marginTop: '2em',
          },
          '.remark-code-title + pre': {
            marginTop: 0,
          },
        },
      },
    }),
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')({
      modifiers: [],
    }),
  ],
}
