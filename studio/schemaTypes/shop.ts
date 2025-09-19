import { defineType } from "sanity";

export const shop = defineType({
  name: "shop",
  title: "Shop",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "description", title: "Description", type: "text" },
    { name: "price", title: "Price", type: "number" },
    { name: "image", title: "Image", type: "image" },
    { name: "link", title: "Link", type: "url" },
  ],
});
