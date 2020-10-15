import { NextApiRequest, NextApiResponse } from 'next'
import { getTopTracks } from 'utils/spotify'

export default async function (_: NextApiRequest, res: NextApiResponse) {
  const rawTracks = await getTopTracks()

  const tracks = rawTracks.items.map((track: any) => ({
    name: track.name,
    image: track.album.images[2].url,
    url: track.external_urls.spotify,
    artists: track.artists.map((artist: any) => artist.name).join(', '),
  }))

  res.setHeader(
    'Cache-Control',
    'public, max-age=86400, stale-while-revalidate=43200'
  )
  return res.json({ tracks })
}
