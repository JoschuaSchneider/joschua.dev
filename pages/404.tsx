import Container from 'components/Container'
import Heading from 'components/Heading'
import Layout from 'components/Layout'
import Text from 'components/Text'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

const NotFound = () => {
  return (
    <Layout>
      <NextSeo
        title="404 Not Found"
        description="This page does not exist, please try a different url or go to the Homepage."
      />
      <Container className="mt-8 mb-12">
        <Heading level="h1" className="mb-8">
          404 – Not Found
        </Heading>
        <Text className="text-lg">
          The page you are looking for does not exist.
        </Text>
        <Link href="/">
          <a className="text-indigo-600 dark:text-indigo-400 hover:underline">
            Go back to the Homepage.
          </a>
        </Link>
      </Container>
    </Layout>
  )
}

export default NotFound
