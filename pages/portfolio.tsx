import Container from 'components/Container'
import Heading from 'components/Heading'
import Layout from 'components/Layout'
import Text from 'components/Text'
import { NextSeo } from 'next-seo'

const Portfolio = () => (
  <Layout>
    <NextSeo title="Portfolio" />
    <Container className="flex flex-col my-12 mt-8 space-y-8">
      <Heading
        level="h2"
        className="font-mono text-lg text-gray-900 dark:text-white"
        unstyled
      >
        Web-Development
      </Heading>
      <div className="grid grid-cols-2 gap-8">
        <div className="relative overflow-hidden rounded-md">
          <img
            src="/portfolio/wildkraeuterwerk-screenshot.png"
            style={{
              filter: 'grayscale(50%)',
            }}
            alt=""
          />
        </div>
        <div className="my-auto">
          <Heading level="h2">Wildkräuterwerk</Heading>
          <Text className="text-lg">E-Commerce • JAM-Stack</Text>
          <Text className="">
            Online-Shop for Handmade skincare products and more.
          </Text>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="relative overflow-hidden rounded-md">
          <img
            src="/portfolio/goschs-gasthof-screenshot.png"
            style={{
              filter: 'grayscale(50%)',
            }}
            alt=""
          />
        </div>
        <div className="my-auto">
          <Heading level="h2">Gosch's Gasthof</Heading>
          <Text className="text-lg">Gastronomy • JAM-Stack</Text>
          <Text className="">
            Homepage of local German Restaurant "Gosch's Gasthof"
          </Text>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="relative overflow-hidden rounded-md">
          <img
            src="/portfolio/snapcraft-screenshot.png"
            style={{
              filter: 'grayscale(50%)',
            }}
            alt=""
          />
        </div>
        <div className="my-auto">
          <Heading level="h2">Snapcraft</Heading>
          <Text className="text-lg">OpenSource • JAM-Stack</Text>
          <Text className="">Image generator for Minecraft Inventories</Text>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="relative overflow-hidden rounded-md">
          <img
            src="/portfolio/anspannungs-protokoll-screenshot.png"
            style={{
              filter: 'grayscale(50%)',
            }}
            alt=""
          />
        </div>
        <div className="my-auto">
          <Heading level="h2">Tension Tracker</Heading>
          <Text className="text-lg">Proof of Concept • React & Firebase</Text>
          <Text className="">
            Progressive Webapp for tracking emotional tension.
          </Text>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="relative overflow-hidden rounded-md">
          <img
            src="/portfolio/katerlive-screenshot.png"
            style={{
              filter: 'grayscale(50%)',
            }}
            alt=""
          />
        </div>
        <div className="my-auto">
          <Heading level="h2">Katerlive Brand</Heading>
          <Text className="text-lg">Brand Design • GD, React</Text>
          <Text className="">Branding, Web-Overlays and Graphic Design</Text>
        </div>
      </div>
    </Container>
  </Layout>
)

export default Portfolio
