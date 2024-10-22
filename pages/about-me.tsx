import Container from 'components/Container'
import Heading from 'components/Heading'
import Layout from 'components/Layout'
import PodcastList from 'components/PodcastList'
import Text from 'components/Text'
import TopTracks from 'components/TopTracks'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'

const AboutMe = () => (
  <Layout>
    <NextSeo title="About Me" />
    <Container className="my-12 mt-8">
      <Heading level="h1" className="mb-6">
        About Me
      </Heading>
      <Text>
        I'm a 23 year old developer and CS student from Germany. I create modern
        web applications, tooling and learning resources. Coding has been my
        passion for over 10 years and my particular interest in Web Development
        now makes up the majority of my experience.
      </Text>
    </Container>
    <Container className="my-12">
      <Link href="/uses">
        <a className="flex flex-wrap items-center pl-4 border-l-2 border-gray-400 md:flex-no-wrap dark:border-gray-800 group">
          <div className="">
            <Image
              width={180}
              height={126}
              src="/uses-macbook.png"
              className="transition-transform duration-500 transform group-hover:scale-105"
            />
          </div>
          <Text
            className="px-4 pt-2 text-gray-700 rounded-md md:pl-8 dark:text-gray-400 md:pt-0"
            unstyled
          >
            <span className="text-lg font-semibold">/uses</span>
            <br />
            <span>Technology, Gadgets and Tools that I use currently.</span>
          </Text>
        </a>
      </Link>
    </Container>
    <Container className="my-12">
      <Text
        className="text-lg font-semibold text-red-600 dark:text-red-500"
        unstyled
      >
        Favourite
      </Text>
      <Heading level="h2" className="mb-6">
        Podcasts
      </Heading>
      <PodcastList />
    </Container>
    <Container className="my-12">
      <Text
        className="text-lg font-semibold text-green-600 dark:text-green-500"
        unstyled
      >
        Spotify
      </Text>
      <Heading level="h2" className="mb-6">
        Top Tracks
      </Heading>
      <TopTracks />
    </Container>
  </Layout>
)

export default AboutMe
