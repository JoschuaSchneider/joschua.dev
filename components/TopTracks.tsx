import useSWR from 'swr'
import Text from './Text'

type Track = {
  name: string
  image: string
  url: string
  artists: string
}

const TrackPlaceholder = ({ index }: { index: number }) => (
  <li className="flex">
    <div
      style={{
        width: '64px',
        height: '64px',
      }}
      className="bg-gray-200 rounded-md dark:bg-gray-800"
    />
    <div className="flex flex-col justify-center px-4">
      <div className="w-32 h-4 mb-3 bg-gray-200 rounded dark:bg-gray-800"></div>
      <div className="w-20 h-4 bg-gray-200 rounded dark:bg-gray-800"></div>
    </div>
    <div className="items-center justify-center hidden ml-auto text-4xl font-bold tracking-wider text-gray-300 md:flex dark:text-gray-800">
      <span>
        <span className="text-lg align-baseline">#</span>
        {index + 1}
      </span>
    </div>
  </li>
)

const TopTracks = () => {
  const { data } = useSWR<{ tracks: Track[] }>('/api/spotify-top-tracks')

  return (
    <ol className="space-y-3">
      {!data &&
        Array(20)
          .fill(null)
          .map((_, index) => <TrackPlaceholder index={index} key={index} />)}
      {data?.tracks.map((track, index) => (
        <li key={track.name} className="flex">
          <img
            width="64"
            height="64"
            src={track.image}
            alt={track.name}
            className="flex-shrink-0 rounded-md"
          />
          <div className="flex flex-col justify-center flex-shrink px-4">
            <a
              href={track.url}
              className="font-bold text-gray-800 hover:underline dark:text-white"
            >
              {track.name}
            </a>
            <Text className="text-sm">{track.artists}</Text>
          </div>
          <div className="items-center justify-center hidden ml-auto text-4xl font-bold tracking-wider text-gray-300 md:flex dark:text-gray-800">
            <span>
              <span className="text-lg align-baseline">#</span>
              {index + 1}
            </span>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default TopTracks
