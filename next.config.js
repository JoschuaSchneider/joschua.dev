const readingTime = require('reading-time')
const mdxPrism = require('mdx-prism')
const withMdxEnhanced = require('next-mdx-enhanced')

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  defaultLayout: true,
  remarkPlugins: [
    require('remark-autolink-headings'),
    require('remark-slug'),
    require('remark-code-titles'),
  ],
  rehypePlugins: [mdxPrism],
  extendFrontMatter: {
    process: (mdxContent) => ({
      readingTime: readingTime(mdxContent),
    }),
  },
})({
  async redirects() {
    return [
      {
        source: '/s/:shortcode',
        destination: '/api/short/:shortcode',
        permanent: true,
      },
    ]
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      const generateSitemap = require('./scripts/generate-sitemap')
      generateSitemap()
    }

    return config
  },
})
