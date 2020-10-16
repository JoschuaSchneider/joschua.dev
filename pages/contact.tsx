import ContactForm from 'components/ContactForm'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Layout from 'components/Layout'
import Text from 'components/Text'
import { NextSeo } from 'next-seo'

const Contact = () => {
  return (
    <Layout>
      <NextSeo
        title="Contact"
        description="This page does not exist, please try a different url or go to the Homepage."
      />
      <Container className="mt-8 mb-12">
        <Heading level="h1" className="mb-8">
          Contact
        </Heading>
        <Text>
          <strong>Joschua Schneider</strong>
        </Text>
        <Text>
          <a
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
            href="mailto:hey@joschua.dev"
          >
            Email hey@joschua.dev
          </a>
        </Text>
        <Text>
          <a
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
            href="https://twitter.com/joschuadev"
          >
            Twitter @joschuadev
          </a>
        </Text>
        <Text>
          <a
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
            href="https://github.com/JoschuaSchneider"
          >
            GitHub @JoschuaSchneider
          </a>
        </Text>
      </Container>
      <Container className="my-12">
        <Text className="mb-8 font-semibold">
          ...or use the Form below to send me an Email, I will get back to you
          shortly.
        </Text>
        <ContactForm />
      </Container>
    </Layout>
  )
}

export default Contact
