import { defineType } from "sanity";

export const shop = defineType({
  name: "shop",
  title: "Shop",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "coverImage", title: "Cover Image", type: "image" },
    { name: "featured", title: "Featured", type: "boolean", initialValue: false, description: "Mark this item as featured" },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.min(0).error("Bro, harga masa bisa minus"),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.max(4),
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        { type: "image" },
        {
          type: "object",
          name: "link",
          fields: [
            { name: "text", type: "string", title: "Link Text" },
            { name: "href", type: "url", title: "URL" },
          ],
        },
      ],
    },
    {
      name: "checkout",
      title: "Checkout Link",
      type: "url",
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https']
      }).error("Masukin yang bener bro"),
    },
    { name: "preview", title: "Preview", type: "url" },
  ],
});