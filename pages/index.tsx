import { NextSeo } from 'next-seo'

import Container from 'components/Container'
import Heading from 'components/Heading'
import Layout from 'components/Layout'
import Skill, { getYearDifference } from 'components/Skill'
import Text from 'components/Text'
import { GetStaticProps } from 'next'
import { queryGithubAPI } from 'utils/github-api'
import TopTracks from 'components/TopTracks'
import Link from 'next/link'

export const getStaticProps: GetStaticProps = async () => {
  const repos = await queryGithubAPI(`#graphql
    query {
      viewer {
        repoUseErrorBoundary: repository(name: "use-error-boundary") {
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
        repoSnapcraft: repository(name: "snapcraft") {
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
      repos: [
        repos.data.viewer.repoUseErrorBoundary,
        repos.data.viewer.repoSnapcraft,
      ],
    },
  }
}

const Index = ({ repos }: { repos: any[] }) => (
  <Layout>
    <NextSeo
      title="Developer, CS Student from Germany"
      description="Developer and CS Student from Germany, creating modern Web-Applications, tooling and learing resources."
    />
    <Container className="mt-8 mb-12">
      <Heading level="h1" className="mb-6">
        Hey, I'm Joschua
      </Heading>
      <Text>
        I'm a developer and CS student from Germany. I create modern web
        applications, tooling and learning resources. Coding has been my passion
        for over {getYearDifference(2010)} years and my particular interest in
        Web Development now makes up the majority of my experience.
      </Text>
      <Text className="mt-6">
        <Link href="/contact">
          <a
            href=""
            className="text-lg font-semibold text-indigo-600 dark:text-indigo-500 hover:underline"
          >
            Get in touch with me →
          </a>
        </Link>
      </Text>
    </Container>
    <Container className="my-12">
      <Heading level="h2" className="mb-6">
        Top Skills
      </Heading>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <Skill
          title="JavaScript"
          since={2014}
          className="col-span-2 text-indigo-700 bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-200 md:col-span-3"
        />
        <Skill
          title="React"
          since={2016}
          className="col-span-1 text-indigo-700 bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-200"
        />
        <Skill
          title="Node"
          since={2014}
          className="col-span-1 text-indigo-700 bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-200"
        />
        <Skill
          title="TypeScript"
          since={2019}
          className="col-span-1 text-indigo-700 bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-200"
        />
      </div>
    </Container>
    <Container className="my-12">
      <Heading level="h2" className="mb-6">
        OpenSource
      </Heading>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {repos.map((repo) => (
          <div
            key={repo.name}
            className="px-6 py-4 border border-indigo-100 rounded-md dark:border-gray-800"
          >
            <a
              href={`https://github.com/${repo.nameWithOwner}`}
              className="block mb-1 text-lg font-semibold text-indigo-700 dark:text-indigo-500 hover:underline"
            >
              {repo.name}
            </a>
            <p className="mb-4 text-gray-800 dark:text-gray-300">
              {repo.description}
            </p>
            <div className="flex text-gray-700 dark:text-gray-600">
              <div className="mr-4 text-gray-800 dark:text-gray-500">
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
                {repo.stargazerCount}
              </div>
              <div className="ml-auto">{repo.primaryLanguage.name}</div>
            </div>
          </div>
        ))}
      </div>
    </Container>
    <Container className="my-12">
      <Heading level="h2" className="mb-8">
        Top Tracks
      </Heading>
      <TopTracks />
    </Container>
  </Layout>
)

export default Index
