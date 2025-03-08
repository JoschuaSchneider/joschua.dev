import { Container } from "@/components/container"
import { Heading } from "@/components/heading"
import { Text } from "@/components/text"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact me"
}

export default function Contact() {
  return (
    <
      >
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
        <Text>
          <a
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
            href="https://www.linkedin.com/in/joschua-schneider"
          >
            LinkedIn @joschua-schneider
          </a>
        </Text>
      </Container>
    </>
  )
}
