import Layout from 'components/Layout'
import Heading from 'components/Heading'
import Container from 'components/Container'
import Link from 'next/link'
// @ts-ignore
import { frontMatter as blogFrontMatter } from './blog/**/*.mdx'
import { formatPostDate, postDate, slugFromFrontmatter } from 'utils/blog'
import Text from 'components/Text'
import { FrontMatter } from 'interfaces'
import PageViews from 'components/PageViews'
import { NextSeo } from 'next-seo'

/**
 * Sort by Name if date is the same.
 * This prevents reordering in SSR and rehydration.
 */
const sortedBlogFrontMatter = blogFrontMatter.sort(
  (a: FrontMatter, b: FrontMatter) => {
    if (postDate(a).isSame(postDate(b))) {
      return a.title < b.title ? -1 : a.title > b.title ? 1 : 0
    }
    return postDate(a).isAfter(postDate(b)) ? -1 : 1
  }
)

const Blog = () => {
  return (
    <Layout>
      <NextSeo
        title="Blog"
        description={`Tips and tricks on modern web-development.`}
      />
      <Container className="my-8">
        <Heading level="h1" className="mb-6">
          Blog Posts
        </Heading>
        {sortedBlogFrontMatter.map((matter: FrontMatter) => (
          <Link
            key={slugFromFrontmatter(matter)}
            href={`/blog/${slugFromFrontmatter(matter)}`}
          >
            <a>
              <Heading
                level="h3"
                className="text-2xl font-semibold dark:text-white"
                unstyled
              >
                {matter.title}
              </Heading>
              <Text>{matter.summary}</Text>
              <div className="mb-8 text-sm font-semibold text-gray-600">
                {formatPostDate(matter)}
                <span className="mx-2">–</span>
                {matter.readingTime.text}
                <span className="mx-2">–</span>
                <PageViews slug={slugFromFrontmatter(matter)} reveal />
              </div>
            </a>
          </Link>
        ))}
      </Container>
    </Layout>
  )
}

export default Blog
