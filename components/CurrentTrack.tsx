import clsx from 'clsx'
import useSWR from 'swr'
import Text from './Text'

const CurrentTrack = () => {
  const { data } = useSWR('/api/spotify-current-track', {
    refreshInterval: 3000,
  })

  return (
    <div className="relative flex items-center p-4 bg-gray-100 rounded-md dark:bg-gray-900">
      {data && data.track && data.playing && (
        <>
          <img
            src={data.track.image}
            width="64"
            height="64"
            className="rounded"
            alt=""
          />
          <div className="flex flex-col justify-center ml-4">
            <a
              href={data.track.url}
              className="font-bold text-gray-800 dark:text-white hover:underline"
            >
              {data.track.name}
            </a>
            <Text>{data.track.artists}</Text>
          </div>
        </>
      )}
      {data && !data.playing && (
        <>
          <div
            style={{
              width: '64px',
              height: '64px',
            }}
            className="rounded bg-gradient-to-tr from-purple-500 to-red-500"
          ></div>
          <div className="flex flex-col justify-center ml-4">
            <span className="font-bold text-gray-800 dark:text-white hover:underline">
              Spotify
            </span>
            <Text>Not playing</Text>
          </div>
        </>
      )}
      {!data && (
        <div
          style={{
            width: '64px',
            height: '64px',
          }}
          className="bg-gray-300 rounded dark:bg-gray-700"
        ></div>
      )}
      <svg
        width="24"
        height="24"
        className={clsx(
          'ml-auto mr-4 text-green-500',
          data?.playing && 'animate-pulse'
        )}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z" />
      </svg>
    </div>
  )
}

export default CurrentTrack
