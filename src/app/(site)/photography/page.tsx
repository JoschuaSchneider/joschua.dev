import { payload } from "@/utils/payload";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Media, Photo } from "../../../../payload-types";
import { Camera } from "lucide-react";

const createTracks = (docs: Photo[], trackCount: number) => {
  const tracks: Photo[][] = Array.from({ length: trackCount }, () => []);

  docs.forEach((doc, index) => {
    tracks[index % trackCount].push(doc);
  });

  return tracks;
};

const CameraNames = {
  pentax_k1000: "Pentax K1000",
  fujifilm_x100vi: "Fujifilm X100VI",
};

const scaleImageDimensions = (
  originalWidth: number,
  originalHeight: number,
  newWidth: number,
): { width: number; height: number } => {
  const aspectRatio = originalWidth / originalHeight;

  const newHeight = newWidth / aspectRatio;

  return {
    width: newWidth,
    height: newHeight,
  };
};

export default async function Photography() {
  const { docs } = await payload.find({
    collection: "photos",
    limit: 10,
  });

  const tracks = createTracks(docs, 3);

  return (
    <div className="max-w-7xl px-12 py-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mx-auto">
      {tracks.map((media, i) => (
        <div key={i} className="grid grid-cols-1 gap-8 auto-rows-min">
          {media.map((photo) => {
            const image = photo.image as Media;
            const { width, height } = scaleImageDimensions(
              image.width!,
              image.height!,
              380,
            );
            return (
              <div key={photo.id} className="w-full relative group">
                <Image
                  placeholder="empty"
                  width={width}
                  sizes="(max-width: 768px) 95vw, 380px"
                  height={height}
                  src={image.url!}
                  alt={image.alt ?? "alt"}
                  className={twMerge(
                    "bg-gray-50 dark:bg-gray-900 rounded-md w-full",
                  )}
                />
                {photo.camera && (
                  <div className="absolute right-4 bottom-4 px-3 py-1 bg-white/30 backdrop-blur-xl text-white rounded flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity select-none">
                    <Camera className="size-4" />
                    {CameraNames[photo.camera]}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
