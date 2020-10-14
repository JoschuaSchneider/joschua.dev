import { NextApiRequest, NextApiResponse } from 'next'
import faunaClient from 'utils/faunadb'
import { query as q } from 'faunadb'

export default async function incrementPageViews(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug, increment } = req.query

  if (!slug)
    return res.status(404).json({
      error: 'No slug provided',
    })

  const shouldIncrement = increment && increment == 'true'

  const data = await faunaClient.query<{
    data: { slug: string; views: number }
  }>(
    q.If(
      q.Exists(q.Match(q.Index('views_by_slug'), slug)),
      shouldIncrement
        ? q.Update(
            q.Select(['ref'], q.Get(q.Match(q.Index('views_by_slug'), slug))),
            {
              data: {
                views: q.Add(
                  q.Select(
                    ['data', 'views'],
                    q.Get(q.Match(q.Index('views_by_slug'), slug))
                  ),
                  1
                ),
              },
            }
          )
        : q.Get(q.Match(q.Index('views_by_slug'), slug)),
      q.Create(q.Collection('views'), {
        data: {
          slug: slug,
          views: 1,
        },
      })
    )
  )

  res.setHeader(
    'Cache-Control',
    'public, max-age=120, stale-while-revalidate=60'
  )

  return res.status(200).json({
    views: data.data.views,
  })
}
