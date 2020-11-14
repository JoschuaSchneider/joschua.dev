import podcasts from 'data/podcasts.json'
import Image from 'next/image'
import { useState } from 'react'

const PodcastList = () => {
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
        className="flex items-center px-4 py-4 text-xl text-gray-700 rounded-md dark:text-gray-200 col-span-full md:col-span-3"
        style={{
          minHeight: '160px',
        }}
      >
        {activeIndex === -1 ? (
          <>
            <span className="mr-4">🎧 </span>
            <span className="italic">
              "Keeping up with the community – while doing other stuff!"
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

export default PodcastList
