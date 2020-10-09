import Layout from 'components/Layout'
import { NextSeo } from 'next-seo'
import Container from 'components/Container'
import { ReactNode } from 'react'
import Heading from 'components/Heading'
import { unsplashById } from 'utils/unsplash'
import { FrontMatter } from 'interfaces'
import PageViews from 'components/PageViews'
import { formatPostDate, slugFromFrontmatter } from 'utils/blog'

const BlogLayout = ({
  children,
  frontMatter,
}: {
  children: ReactNode
  frontMatter: FrontMatter
}) => {
  return (
    <Layout>
      <NextSeo description={frontMatter.summary} {...frontMatter} />
      <Container className="my-8">
        <Heading level="h1">{frontMatter.title}</Heading>
        <div className="flex items-center justify-between mt-4">
          <p className="text-gray-700">Joschua Schneider</p>
          <p className="text-sm text-gray-600">
            <PageViews slug={slugFromFrontmatter(frontMatter)} increment />
            <span className="mx-2">–</span>
            {frontMatter.readingTime.text}
            <span className="mx-2">–</span>
            {formatPostDate(frontMatter)}
          </p>
        </div>
      </Container>
      <Container as="article" className="mt-12 mb-8 prose">
        {frontMatter.image && (
          <img
            width="704"
            height="300"
            className="object-cover w-full mt-8 rounded-sm"
            src={frontMatter.image}
          />
        )}
        {frontMatter.unsplash && (
          <img
            width="704"
            height="300"
            className="object-cover w-full mt-8 rounded-sm"
            src={unsplashById(frontMatter.unsplash, 704, 300)}
          />
        )}
        {children}
      </Container>
    </Layout>
  )
}

export default BlogLayout
