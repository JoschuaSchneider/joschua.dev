import { Container } from '@/components/container'
import { FavouritePodcasts } from '@/components/favourite-podcasts'
import { Heading } from '@/components/heading'
import { Text } from "@/components/text"
import { TopSpotiryTracks } from '@/components/top-spotify-tracks'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: "About me"
}

export default function AboutMe() {
  return (
    <>
      <Container className="my-12 mt-8">
        <Heading level="h1" className="mb-6">
          About Me
        </Heading>
        <Text>
          Hello! I&apos;m Joschua, a passionate self-taught developer from Hanover, Germany, with nearly a decade of experience in building full-stack web applications.

          <br />
          <br />
          In addition to my full-time work, I run a freelance business where I apply my extensive skills in web and mobile application development to help clients bring their digital ideas to life.
          <br />
          Feel free to <Link href="/contact" className='dark:text-indigo-300 text-indigo-600'>contact me</Link> if you want to get in touch with me!
        </Text>
      </Container>
      <Container className="my-12">
        <Link href="/uses" className="flex flex-wrap items-center pl-4 border-l-2 border-gray-400 md:flex-no-wrap dark:border-gray-800 group">
          <div className="">
            <Image
              width={140}
              height={100}
              src="/macbook.png"
              className="transition-transform duration-500 transform group-hover:scale-105"
              alt="macbook"
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
        <FavouritePodcasts />
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
        <Suspense>
          <TopSpotiryTracks />
        </Suspense>
      </Container>
    </>
  )
}
