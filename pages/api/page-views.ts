import { NextApiRequest, NextApiResponse } from 'next'
import firebaseAdmin from 'utils/firebase-admin'

export default async function pageViews(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query

  if (!slug)
    return res.status(404).json({
      error: 'No slug provided',
    })

  return firebaseAdmin
    .ref('views')
    .child(slug.toString())
    .once('value', (snapshot) => {
      res.status(200).json({
        views: snapshot.val() ?? 0,
      })
    })
}
