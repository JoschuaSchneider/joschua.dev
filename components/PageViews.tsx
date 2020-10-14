import { useEffect, useState } from 'react'

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
    const loadViews = async () => {
      /** Send bypass parameter when updating the view count */
      const response = await fetch(
        `/api/page-views?slug=${encodeURIComponent(slug)}&increment=${
          increment ? 'true&_vercel_no_cache=1' : 'false'
        }`
      )

      const data = await response.json()

      setViews(data.views)
    }

    loadViews()
  }, [increment])

  if (reveal && views === null) return null

  return <span>{views ?? '#'} views</span>
}

export default PageViews
