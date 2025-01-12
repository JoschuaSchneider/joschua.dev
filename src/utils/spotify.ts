import { unstable_cacheLife as cacheLife } from 'next/cache'
import querystring from 'querystring'

const clientId = process.env.SPOTIFY_CLIENT_ID ?? ''
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET ?? ''
const userRefreshToken = process.env.SPOTIFY_USER_REFRESH_TOKEN ?? ''

const authorizationHeader = `Basic ${Buffer.from(
  `${clientId}:${clientSecret}`
).toString('base64')}`

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
const TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks'
const CURRENT_TRACK_ENDPOINT =
  'https://api.spotify.com/v1/me/player/currently-playing'

export const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: authorizationHeader,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: userRefreshToken,
    }),
  })

  return await response.json() as { access_token: string }
}

type Track = {
  album: {
    images: { url: string; }[]
  }
  artists: { name: string }[]
  name: string;
  external_urls: {
    spotify: string;
  },
};


export const getTopTracks = async () => {
  'use cache'
  cacheLife('spotifyTopTracks')
  const { access_token } = await getAccessToken()

  const response = await fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  const { items } = await response.json() as { items: Track[] }

  return { items: items.slice(0, 15) }
}

export const getCurrentTrack = async () => {
  'use cache'
  cacheLife('spotifyCurrentTrack')
  const { access_token } = await getAccessToken()

  const response = await fetch(CURRENT_TRACK_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  if (response.status === 204) return null

  return await response.json() as {
    item: Track; is_playing: boolean;
  } | null
}
