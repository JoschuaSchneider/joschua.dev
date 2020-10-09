import { useEffect, useState } from 'react'
import loadFirebase from 'utils/firebase'

const PageViews = ({
  slug,
  increment = false,
  reveal = false,
}: {
  slug: string
  increment?: boolean
  reveal?: boolean
}) => {
  const [views, setViews] = useState(null)

  useEffect(() => {
    let firebase: firebase.database.Database | null = null

    const onValue = (snapshot: firebase.database.DataSnapshot) =>
      setViews(snapshot.val())

    const getViews = async () => {
      firebase = await loadFirebase()
      firebase.ref('views').child(slug).on('value', onValue)
    }

    getViews()

    return () => {
      if (firebase) firebase.ref('views').child(slug).off('value', onValue)
    }
  }, [slug])

  useEffect(() => {
    if (increment) {
      fetch(`/api/increment-page-views?slug=${encodeURIComponent(slug)}`)
    }
  }, [increment])

  if (reveal && views === null) return null

  return <span>{views ?? '#'} views</span>
}

export default PageViews
