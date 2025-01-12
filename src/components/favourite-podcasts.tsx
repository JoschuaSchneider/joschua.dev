"use client";

import Image from 'next/image'
import { useState } from 'react'

const podcasts = [
  {
    "name": "Off The Main Thread",
    "imageUrl": "/podcasts/otmt.jpg",
    "url": "https://podcasts.apple.com/us/podcast/off-the-main-thread/id1717033471",
    "emoji": "💥",
    "comment": "Jake and Surma, previously on the HTTP 203 podcast, explore complex topics and ask the right questions. The best source to keep up with Browser APIs!"
  },
  {
    "name": "How About Tomorrow?",
    "imageUrl": "/podcasts/how-about-tomorrow.jpg",
    "url": "https://podcasts.apple.com/us/podcast/how-about-tomorrow/id1651741524",
    "emoji": "💫",
    "comment": "Adam and Dax discuss web technologies, the internet, and the future of (basically) everything."
  },
  {
    "name": "SyntaxFM",
    "imageUrl": "/podcasts/syntax-fm.jpg",
    "url": "https://podcasts.apple.com/us/podcast/syntax-tasty-web-development-treats/id1253186678",
    "emoji": "💛",
    "comment": "Wes and Scott bring incredible amounts of positivity and knowledge to the web development community. Twice a week!"
  },
  {
    "name": "Darknet Diaries",
    "imageUrl": "/podcasts/darknet-diaries.jpg",
    "url": "https://pca.st/darknetdiaries",
    "emoji": "🚨",
    "comment": "Pentesting, Illegal activities and all things CyberSecurity. This podcasts pulls you down every rabbit hole there is."
  }
]

export const FavouritePodcasts = () => {
  const [activeIndex, setActiveIndex] = useState(-1)

  const bindPodcastHover = (index: number) => ({
    onMouseEnter: () => setActiveIndex(index),
    onMouseLeave: () => setActiveIndex(-1),
  })

  return (
    <div className="grid grid-cols-3 gap-6 md:grid-cols-4">
      {podcasts.map((podcast, index) => (
        <a
          key={podcast.name}
          href={podcast.url}
          {...bindPodcastHover(index)}
          className="overflow-hidden transition-transform duration-200 transform rounded-md hover:scale-110"
        >
          <Image
            width={158}
            height={158}
            src={podcast.imageUrl}
            className="w-full h-full"
            alt={podcast.name}
          />
        </a>
      ))}
      <div
        className="flex items-center px-4 py-4 text-xl text-gray-700 rounded-md dark:text-gray-200 col-span-full"
        style={{
          minHeight: '160px',
        }}
      >
        {activeIndex === -1 ? (
          <>
            <span className="mr-4">🎧 </span>
            <span className="italic">
              &quot;Keeping up with the community – while doing other stuff!&quot;
            </span>
          </>
        ) : (
          <>
            <span className="mr-4">{podcasts[activeIndex].emoji} </span>
            <div className="italic">
              <span className="font-semibold">
                {podcasts[activeIndex].name}
              </span>
              <br />
              <span>{podcasts[activeIndex].comment}</span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
