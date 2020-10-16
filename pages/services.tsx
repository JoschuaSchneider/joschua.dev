import Container from 'components/Container'
import Heading from 'components/Heading'
import Layout from 'components/Layout'
import Text from 'components/Text'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

const Services = () => {
  return (
    <Layout>
      <NextSeo title="Services" />
      <Container className="mt-8 mb-12">
        <Heading level="h1" className="mb-8">
          Services
        </Heading>
        <div className="grid grid-cols-5 gap-4">
          <div className="relative col-span-2 py-8 rounded-md shadow-lg md:py-16 bg-gradient-to-tr from-purple-700 to-indigo-500 dark:from-purple-900 dark:to-indigo-600">
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-xl font-bold tracking-wide text-white md:font-black md:text-4xl">
              Websites
            </div>
          </div>
          <div className="relative col-span-3 py-8 rounded-md shadow-lg md:py-16 bg-gradient-to-tr from-red-700 to-orange-500 dark:from-red-800">
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-xl font-bold tracking-wide text-white md:font-black md:text-4xl">
              JAMStack
            </div>
          </div>
          <div className="relative col-span-3 py-8 rounded-md shadow-lg md:py-16 bg-gradient-to-tr from-green-700 to-teal-500 dark:from-green-800 dark:to-teal-500">
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-xl font-bold tracking-wide text-white md:font-black md:text-4xl">
              Web-Applications
            </div>
          </div>
          <div className="relative col-span-2 py-8 rounded-md shadow-lg md:py-16 bg-gradient-to-tr from-gray-700 to-gray-500 dark:from-gray-900 dark:to-gray-600">
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-xl font-bold tracking-wide text-white md:font-black md:text-4xl">
              SEO
            </div>
          </div>
          <div className="relative col-span-2 py-8 rounded-md shadow-lg md:py-16 bg-gradient-to-tr from-purple-700 to-pink-500 dark:from-purple-800 dark:to-pink-600">
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-lg font-bold tracking-wide text-white md:font-black md:text-3xl">
              Maintenance
            </div>
          </div>
          <div className="relative col-span-3 py-8 rounded-md shadow-lg md:py-16 bg-gradient-to-tr from-blue-700 to-teal-500">
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-xl font-bold tracking-wide text-white md:font-black md:text-4xl">
              Headless CMS
            </div>
          </div>
        </div>
      </Container>
      <Container className="my-12">
        <Heading level="h2" className="mb-8">
          Modern, Fast, Unique
        </Heading>
        <Text className="text-lg">
          I create and maintain <strong>modern, fast and unique</strong>{' '}
          websites for small businesses.
        </Text>
        <Text className="text-lg">
          You get all of the benefits of a <strong>static site</strong>, while
          still being able to use <strong>dynamic content</strong>. Thanks to
          the power of the <strong>JAM-Stack</strong> architecture.
        </Text>
        <div className="mt-8 prose">
          <p>
            <strong>Is this for me?</strong>
          </p>
          <p>My services are primarily tailored for:</p>
          <ul>
            <li>Small Businesses (e.g. Local Restaurants)</li>
            <li>Individuals (Personal Blogs, Portfolios)</li>
          </ul>
          <p>
            <strong>What will I get?</strong>
          </p>
          <ul>
            <li>Individual Design and Layout</li>
            <li>Outstanding SEO Performance</li>
            <li>Dynamic Content (Blogs, Booking Systems, Contact Forms)</li>
            <li>
              Full-Stack Functionality (Member Areas, Business Logic, Databases)
            </li>
            <li>Editable Content (using a Headless CMS)</li>
            <li>High Security and Stability</li>
            <li>GDPR Compliance</li>
            <li>Affordable Hosting and Domains</li>
          </ul>
          <p>
            Your Site will be built on <strong>Next.js</strong>, a
            static/dynamic hybrid framework for React.
          </p>
          <p>
            <strong>But I don't want to deal with my online presence!</strong>
          </p>
          <p>
            All of this is already too technical for you, or you just dont have
            the time?
          </p>
          <p>
            No Problem! I offer <strong>Maintenance as a Subscription</strong>.
            Instead of integrating a Content-Management-System, I will take care
            of any necessary changes.
          </p>
          <p>
            <strong>How much will this cost?</strong>
          </p>
          <p>
            That strongly depends on your needs and the scale of the project.
          </p>
          <p>
            Static sites with only the most important pages (Home, Contact,
            Imprint/GDPR) and/or a simple design start from{' '}
            <strong>1.000€</strong>.
          </p>
          <p>
            If you need a lot of dynamic content, API integrations or
            Authentication your project will start from <strong>2.500€</strong>.
          </p>
          <p>
            You can contact me with a rough overview of what you need. I will
            get back to you with an estimated price or some more questions about
            your project.
          </p>
        </div>
        <Link href="/contact">
          <a className="block px-4 py-2 mt-12 font-semibold text-center text-white bg-indigo-600 rounded">
            Contact me to get an estimate
          </a>
        </Link>
      </Container>
    </Layout>
  )
}

export default Services
