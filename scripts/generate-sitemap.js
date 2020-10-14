/**
 * Generate Sitemap
 * Heavily inspired by https://leerob.io/blog/nextjs-sitemap-robots
 */

const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')

module.exports = async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc')

  const pages = await globby([
    'pages/**/*{.tsx,.mdx}',
    '!pages/**/*-draft.mdx',
    '!pages/_*.tsx',
    '!pages/api',
  ])

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace('pages', '')
                  .replace('.tsx', '')
                  .replace('.mdx', '')
                const route = path === '/index' ? '' : path

                return `
                        <url>
                            <loc>${`https://joschua.dev${route}`}</loc>
                        </url>
                    `
              })
              .join('')}
        </urlset>
  `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  fs.writeFileSync('public/sitemap.xml', formatted)
}
