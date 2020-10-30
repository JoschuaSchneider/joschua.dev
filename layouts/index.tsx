import Layout from 'components/Layout'
import { NextSeo } from 'next-seo'
import Container from 'components/Container'
import { ReactNode } from 'react'
import Heading from 'components/Heading'
import { unsplashById } from 'utils/unsplash'
import { FrontMatter } from 'interfaces'
import PageViews from 'components/PageViews'
import { formatPostDate, slugFromFrontmatter } from 'utils/blog'
import Image from 'next/image'

const BlogLayout = ({
  children,
  frontMatter,
}: {
  children: ReactNode
  frontMatter: FrontMatter
}) => {
  const hasImage = !!frontMatter.unsplash

  return (
    <Layout>
      <NextSeo
        description={frontMatter.summary}
        openGraph={
          hasImage
            ? {
                images: [
                  {
                    url: unsplashById(frontMatter.unsplash, 1299, 628),
                  },
                ],
              }
            : {}
        }
        {...frontMatter}
      />
      <Container className="pb-8 mt-8">
        <Heading level="h1">{frontMatter.title}</Heading>
        <div className="flex flex-wrap items-center justify-between mt-4 md:flex-no-wrap">
          <p className="text-gray-700 dark:text-gray-500">Joschua Schneider</p>
          <p className="text-sm text-gray-600">
            <PageViews slug={slugFromFrontmatter(frontMatter)} increment />
            <span className="mx-2">–</span>
            {frontMatter.readingTime.text}
            <span className="mx-2">–</span>
            {formatPostDate(frontMatter)}
          </p>
        </div>
        {hasImage && (
          <Image
            width={704}
            height={300}
            quality={90}
            className="block object-cover mt-8 rounded-sm"
            src={unsplashById(frontMatter.unsplash, 704, 300)}
          />
        )}
      </Container>
      <Container as="article" className="my-12 prose">
        {children}
      </Container>
    </Layout>
  )
}

export default BlogLayout
