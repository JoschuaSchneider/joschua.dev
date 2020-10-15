import { NextApiRequest, NextApiResponse } from 'next'
import { getCurrentTrack } from 'utils/spotify'

export default async function (_: NextApiRequest, res: NextApiResponse) {
  const rawTrack = await getCurrentTrack()

  const track = rawTrack.item
    ? {
        name: rawTrack.item.name,
        image: rawTrack.item.album.images[2].url,
        url: rawTrack.item.external_urls.spotify,
        artists: rawTrack.item.artists
          .map((artist: any) => artist.name)
          .join(', '),
      }
    : null

  res.setHeader(
    'Cache-Control',
    'public, max-age=60, stale-while-revalidate=30'
  )
  return res.json({ playing: rawTrack.is_playing, track })
}
