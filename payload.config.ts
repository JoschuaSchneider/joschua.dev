import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";
import { Media } from "@/app/(payload)/collections/media";
import { Photos } from "@/app/(payload)/collections/photos";
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Media, Photos],
  secret: process.env.PAYLOAD_SECRET || "",
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  sharp,
  plugins: [
    uploadthingStorage({
      collections: {
        media: true,
      },
      options: {
        token: process.env.UPLOADTHING_TOKEN,
        acl: "public-read",
      },
    }),
  ],
});
