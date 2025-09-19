import { createClient } from "@sanity/client";

import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "irfb1i5g",
  dataset: "production",
  apiVersion: "2025-09-19",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);