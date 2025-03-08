import { CollectionConfig } from "payload";

export const Photos: CollectionConfig = {
  slug: "photos",
  fields: [
    {
      type: "text",
      required: false,
      name: "caption",
      label: "Caption",
    },
    {
      type: "select",
      required: false,
      name: "camera",
      label: "Camera",
      options: [
        {
          label: "Pentax K1000",
          value: "pentax_k1000",
        },
        {
          label: "Fujifilm X100VI",
          value: "fujifilm_x100vi",
        },
      ],
    },
    {
      type: "upload",
      name: "image",
      label: "Image",
      relationTo: "media",
    },
  ],
};
