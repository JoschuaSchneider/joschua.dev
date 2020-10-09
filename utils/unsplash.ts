/**
 * Get unsplash url for given photoId with optional resizing
 */
export const unsplashById = (
  photoId: string,
  width: number = 900,
  height: number = 700
): string => {
  return `https://source.unsplash.com/${photoId}/${width}x${height}`
}
