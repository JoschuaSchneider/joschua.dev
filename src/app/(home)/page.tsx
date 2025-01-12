import { Heading } from '@/components/heading'
import { Skill, getYearDifference } from '@/components/skill'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Text } from '@/components/text'
import { Suspense } from 'react'
import { Repos } from './components/repos'


export default async function Index() {
  return (
    <>
      <Container className="mt-8 mb-12">
        <Heading level="h1" className="mb-6">
          Hey, I&apos;m Joschua
        </Heading>
        <Text>
          I&apos;m a senior Full-Stack developer from Germany. I build modern web
          applications, Mobile apps and tooling. Coding has been my passion
          for over {getYearDifference(2010)} years and my particular interest in
          Web Development now makes up the majority of my experience.
        </Text>
        <Text className="mt-6">
          <Link href="/contact"
            className="text-lg font-semibold text-indigo-600 dark:text-indigo-500 hover:underline"
          >
            Get in touch  →
          </Link>
        </Text>
      </Container>
      <Container className="my-12">
        <Heading level="h2" className="mb-6">
          Top Skills
        </Heading>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <Skill
            title="React"
            since={2016}
            className="col-span-1 text-indigo-700 bg-indigo-50 dark:bg-indigo-900 dark:text-indigo-100" />
          <Skill
            title="Angular"
            since={2021}
            className="col-span-1 text-indigo-700 bg-indigo-50 dark:bg-indigo-900 dark:text-indigo-100" />
          <Skill
            title="Flutter"
            since={2}
            mode="absolute"
            className="col-span-1 text-indigo-700 bg-indigo-50 dark:bg-indigo-900 dark:text-indigo-100" />
          <Skill
            title="Node"
            since={2017}
            className="col-span-1 text-indigo-700 bg-indigo-50 dark:bg-indigo-900 dark:text-indigo-100" />
          <Skill
            title="C#"
            since={2021}
            className="col-span-2 text-indigo-700 bg-indigo-50 dark:bg-indigo-900 dark:text-indigo-100" />
          <Skill
            title="TypeScript"
            since={2018}
            className="col-span-2 text-indigo-700 bg-indigo-50 dark:bg-indigo-900 dark:text-indigo-100 md:col-span-3" />
        </div>
      </Container>
      <Container className="my-12">
        <Heading level="h2" className="mb-6">
          OpenSource
        </Heading>
        <Suspense fallback={
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='border border-indigo-100 rounded-md dark:border-gray-800 h-[154px]' />
            <div className='border border-indigo-100 rounded-md dark:border-gray-800 h-[154px]' />
            <div className='border border-indigo-100 rounded-md dark:border-gray-800 h-[154px]' />
            <div className='border border-indigo-100 rounded-md dark:border-gray-800 h-[154px]' />
          </div>
        }>
          <Repos />
        </Suspense>
      </Container>
    </>
  )
}
