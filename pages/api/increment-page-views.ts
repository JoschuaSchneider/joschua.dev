import { NextApiRequest, NextApiResponse } from 'next'
import firebaseAdmin from 'utils/firebase-admin'

export default async function incrementPageViews(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query

  if (!slug)
    return res.status(404).json({
      error: 'No slug provided',
    })

  const { snapshot } = await firebaseAdmin
    .ref('views')
    .child(slug.toString())
    .transaction((views) => {
      if (!views) return 1

      return views + 1
    })

  return res.status(200).json({
    views: snapshot?.val() ?? 0,
  })
}
