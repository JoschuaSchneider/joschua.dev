import Container from 'components/Container'
import Heading from 'components/Heading'
import Layout from 'components/Layout'
import Text from 'components/Text'
import TopTracks from 'components/TopTracks'
import { NextSeo } from 'next-seo'

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
      <Text
        className="text-lg font-semibold text-red-600 dark:text-red-500"
        unstyled
      >
        Favourite
      </Text>
      <Heading level="h2" className="mb-6">
        Podcasts
      </Heading>
      <div className="grid grid-cols-3 gap-6 md:grid-cols-4">
        <a href="https://syntax.fm/" className="overflow-hidden rounded-md">
          <img
            src="/podcasts/syntax-fm.jpg"
            className="w-full h-full"
            alt="SyntaxFM Podcast"
          />
        </a>
        <a href="https://pca.st/bWXP" className="overflow-hidden rounded-md">
          <img
            src="/podcasts/react-podcast.jpg"
            className="w-full h-full"
            alt="React Podcast"
          />
        </a>
        <a href="https://pca.st/jFUY" className="overflow-hidden rounded-md">
          <img src="/podcasts/http-203.jpg" className="w-full h-full" alt="" />
        </a>
        <a
          href="https://pca.st/fullstack"
          className="overflow-hidden rounded-md"
        >
          <img
            src="/podcasts/fullstack-radio.jpg"
            className="w-full h-full"
            alt="Full Stack Radio Podcast"
          />
        </a>
        <a
          href="https://pca.st/darknetdiaries"
          className="overflow-hidden rounded-md"
        >
          <img
            src="/podcasts/darknet-diaries.jpg"
            className="w-full h-full"
            alt="Darknet Diaries Podcast"
          />
        </a>
        <div className="flex items-center px-6 py-4 text-xl text-gray-700 rounded-md dark:text-gray-200 col-span-full md:col-span-3">
          <span className="mr-4">🎧 </span>
          <span className="italic">
            "Keeping up with the community – while doing other stuff!"
          </span>
        </div>
      </div>
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
