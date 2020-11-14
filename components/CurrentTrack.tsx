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
      {data?.playing ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="35"
          height="35"
          preserveAspectRatio="none"
          className={'ml-auto mr-4 text-green-500 animate-record-spin'}
          viewBox="0 0 400 400"
          version="1"
        >
          <defs>
            <linearGradient>
              <stop offset="0" stopColor="#6c6c6c"></stop>
              <stop offset="1" stopColor="#3e3e3e"></stop>
            </linearGradient>
            <linearGradient id="b">
              <stop offset="0" stopColor="#f7f7f7"></stop>
              <stop offset="1" stopColor="#e1e1e1"></stop>
            </linearGradient>
            <linearGradient id="a">
              <stop offset="0" stopColor="#fff"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </linearGradient>
            <radialGradient
              id="g"
              cx="289.429"
              cy="209.669"
              r="92.5"
              fx="289.429"
              fy="209.669"
              gradientTransform="rotate(135 303.86 230.216) scale(1.22978 2.77397)"
              gradientUnits="userSpaceOnUse"
              xlinkHref="#a"
            ></radialGradient>
            <radialGradient
              id="h"
              cx="199.281"
              cy="192.844"
              r="53.688"
              fx="199.281"
              fy="192.844"
              gradientTransform="matrix(0 2.87286 -1 0 392.844 -372.507)"
              gradientUnits="userSpaceOnUse"
              xlinkHref="#b"
            ></radialGradient>
            <filter id="e">
              <feGaussianBlur stdDeviation="3.7"></feGaussianBlur>
            </filter>
          </defs>
          <use
            width="100%"
            height="100%"
            fillOpacity="0.5"
            filter="url(#e)"
            transform="translate(2.714 4)"
            xlinkHref="#d"
          ></use>
          <path
            id="d"
            d="M200 15C97.88 15 15 97.88 15 200s82.88 185 185 185 185-82.88 185-185S302.12 15 200 15zm0 179.813a5.186 5.186 0 015.188 5.187 5.186 5.186 0 01-5.188 5.188 5.186 5.186 0 01-5.188-5.188 5.186 5.186 0 015.188-5.188z"
          ></path>
          <path
            fill="#333"
            d="M200 132.656c-37.16 0-67.344 30.185-67.344 67.344 0 37.16 30.185 67.344 67.344 67.344 37.16 0 67.344-30.185 67.344-67.344 0-37.16-30.185-67.344-67.344-67.344zm0 62.906a4.433 4.433 0 014.438 4.438 4.433 4.433 0 01-4.438 4.438 4.433 4.433 0 01-4.438-4.438 4.433 4.433 0 014.438-4.438z"
          ></path>
          <path
            fill="none"
            stroke="#000"
            strokeWidth="3.562"
            d="M200 16.781c101.156 0 183.219 82.063 183.219 183.219 0 101.156-82.063 183.219-183.219 183.219-101.156 0-183.219-82.063-183.219-183.219C16.781 98.844 98.844 16.781 200 16.781z"
          ></path>
          <use
            width="100%"
            height="100%"
            transform="rotate(180 200 200)"
            xlinkHref="#f"
          ></use>
          <path
            id="f"
            fill="url(#g)"
            d="M106.438 200c0-51.651 41.91-93.594 93.562-93.594V18.562C99.851 18.563 18.562 99.853 18.562 200z"
          ></path>
          <path
            fill="none"
            stroke="#000"
            strokeWidth="3"
            d="M200 132.688c37.167 0 67.313 30.145 67.313 67.312S237.166 267.314 200 267.314 132.686 237.167 132.686 200c0-37.167 30.147-67.313 67.314-67.313z"
          ></path>
          <path
            fill="url(#h)"
            d="M237.963 162.037c-20.953-20.952-54.973-20.952-75.926 0-20.952 20.953-20.952 54.973 0 75.926 20.953 20.952 54.973 20.952 75.926 0 20.952-20.953 20.952-54.973 0-75.926zm-34.295 34.295a5.186 5.186 0 010 7.336 5.186 5.186 0 01-7.336 0 5.186 5.186 0 010-7.336 5.186 5.186 0 017.336 0z"
          ></path>
          <path
            fill="#fff"
            d="M243.951 156.049a61.825 61.825 0 00-24.285-15.004l-1.237 3.712c8.315 2.765 16.125 7.463 22.738 14.076 8.056 8.056 13.256 17.884 15.6 28.24l3.823-.862a61.816 61.816 0 00-16.639-30.162zm-101.337 34.206l-3.89-.663c-3.236 19.173 2.54 39.573 17.325 54.36 14.746 14.745 35.076 20.526 54.204 17.345l-.64-3.867c-17.926 2.984-36.963-2.446-50.78-16.263-13.852-13.852-19.253-32.947-16.22-50.912z"
            opacity="0.743"
          ></path>
        </svg>
      ) : (
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          preserveAspectRatio="none"
          className={'ml-auto mr-4 text-green-500'}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z" />
        </svg>
      )}
    </div>
  )
}

export default CurrentTrack
