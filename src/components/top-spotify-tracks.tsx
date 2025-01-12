import { Text } from "@/components/text"
import { getTopTracks } from '@/utils/spotify';
import Image from "next/image";

export const TrackPlaceholder = ({ index }: { index: number }) => (
  <li className="flex">
    <div
      style={{
        width: '64px',
        height: '64px',
      }}
      className="bg-gray-200 rounded-md dark:bg-gray-800"
    />
    <div className="flex flex-col justify-center px-4">
      <div className="w-32 h-4 mb-3 bg-gray-200 rounded dark:bg-gray-800"></div>
      <div className="w-20 h-4 bg-gray-200 rounded dark:bg-gray-800"></div>
    </div>
    <div className="items-center justify-center hidden ml-auto text-4xl font-bold tracking-wider text-gray-300 md:flex dark:text-gray-800">
      <span>
        <span className="text-lg align-baseline">#</span>
        {index + 1}
      </span>
    </div>
  </li>
)

export const TopSpotiryTracks = async () => {
  "use cache";
  const { items } = await getTopTracks();

  return (
    <>
      <ol className="space-y-3">
        {items.map((track, index) => (
          <li key={track.name} className="flex">
            <Image
              width="64"
              height="64"
              src={track.album.images[0]?.url}
              alt={track.name}
              className="flex-shrink-0 rounded-md"
            />
            <div className="flex flex-col justify-center flex-shrink px-4">
              <a
                href={track.external_urls.spotify}
                className="font-bold text-gray-800 hover:underline dark:text-white"
              >
                {track.name}
              </a>
              <Text className="text-sm">{track.artists.map(artist => artist.name).join(", ")}</Text>
            </div>
            <div className="items-center justify-center hidden ml-auto text-4xl font-bold tracking-wider text-gray-300 md:flex dark:text-gray-800">
              <span>
                <span className="text-lg align-baseline">#</span>
                {index + 1}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </>
  )
}
