import { NextApiRequest, NextApiResponse } from 'next'
import faunaClient from 'utils/faunadb'
import { query as q } from 'faunadb'
import { DEPLOYMENT_URL } from 'utils/constants'

const redirect404 = (res: NextApiResponse) =>
  res.redirect(`${DEPLOYMENT_URL}/404`)

export default async function (req: NextApiRequest, res: NextApiResponse) {
  let { shortcode } = req.query

  if (!shortcode) return redirect404(res)

  shortcode = shortcode.toString()

  try {
    const result = await faunaClient.query<{
      data: { shortcode: string; url: string }
    }>(q.Get(q.Match(q.Index('shortcode_to_url'), shortcode)))

    res.setHeader(
      'Cache-Control',
      'public, max-age=172800, stale-while-revalidate=86400'
    )
    return res.redirect(result.data.url)
  } catch (error) {
    return redirect404(res)
  }
}
