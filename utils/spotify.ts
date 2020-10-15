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

  return response.json()
}

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken()

  const response = await fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  return response.json()
}

export const getCurrentTrack = async () => {
  const { access_token } = await getAccessToken()

  const response = await fetch(CURRENT_TRACK_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  if (response.status === 204) return null

  return response.json()
}
