import { NextSeo } from 'next-seo'

import Container from 'components/Container'
import Heading from 'components/Heading'
import Layout from 'components/Layout'
import Skill, { getYearDifference } from 'components/Skill'
import Text from 'components/Text'
import { GetStaticProps } from 'next'
import { queryGithubAPI } from 'utils/github-api'

export const getStaticProps: GetStaticProps = async () => {
  const featuredRepository = await queryGithubAPI(`#graphql
    query {
      viewer {
        repository(name: "use-error-boundary") {
          name
          nameWithOwner
          description
          stargazerCount
          openIssues: issues(states: [OPEN]) {
            totalCount
          }
          closedIssues: issues(states: [CLOSED]) {
            totalCount
          }
          primaryLanguage {
            name
          }
        }
      }
    }
  `)

  return {
    props: {
      featuredRepository: featuredRepository.data.viewer.repository,
    },
  }
}

const Index = ({ featuredRepository }: { featuredRepository: any }) => (
  <Layout>
    <NextSeo title="Joschua Schneider - Developer, CS Student from Germany" />
    <Container className="my-8">
      <Heading level="h1" className="mb-1">
        Hey, I'm Joschua
      </Heading>
      <Text>
        I'm a developer and CS student from Germany. I create modern web
        applications, tooling and learning resources. Coding has been my passion
        for over {getYearDifference(2010)} years and my particular interest in
        Web Development now makes up the majority of my experience.
      </Text>
    </Container>
    <Container className="my-12">
      <Heading level="h2" className="mb-4">
        Top Skills
      </Heading>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <Skill
          title="JavaScript"
          since={2014}
          className="col-span-2 text-indigo-700 bg-indigo-100 md:col-span-3"
        />
        <Skill
          title="React"
          since={2016}
          className="col-span-1 text-indigo-700 bg-indigo-100"
        />
        <Skill
          title="Node"
          since={2014}
          className="col-span-1 text-indigo-700 bg-indigo-100"
        />
        <Skill
          title="TypeScript"
          since={2019}
          className="col-span-1 text-indigo-700 bg-indigo-100"
        />
        <button className="col-span-1 py-3 font-semibold text-center text-indigo-700 bg-indigo-100 bg-opacity-25 rounded-md hover:bg-opacity-50 md:col-span-3">
          Browse all...
        </button>
      </div>
    </Container>
    <Container className="my-12">
      <Heading level="h2" className="mb-4">
        OpenSource
      </Heading>
      <div className="grid grid-cols-1">
        <div className="px-6 py-4 bg-indigo-100 bg-opacity-25 border border-indigo-100 rounded-md">
          <a
            href={`https://github.com/${featuredRepository.nameWithOwner}`}
            className="block mb-1 text-lg font-semibold text-indigo-700 hover:underline"
          >
            {featuredRepository.name}
          </a>
          <p className="mb-2 text-gray-800">{featuredRepository.description}</p>
          <p className="text-gray-700">
            <span className="mr-4 text-gray-800">
              <svg
                className="inline-flex h-4 mb-px"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>{' '}
              {featuredRepository.stargazerCount}
            </span>
            {featuredRepository.primaryLanguage.name}
          </p>
        </div>
      </div>
    </Container>
  </Layout>
)

export default Index
