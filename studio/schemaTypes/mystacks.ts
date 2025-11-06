import { defineType } from "sanity";

export const stack = defineType({
  name: "stack",
  title: "My Stack",
  type: "document",
  orderings: [
    {
      title: 'Manual order',
      name: 'manualOrder',
      by: [
        {field: 'orderRank', direction: 'asc'}
      ]
    }
  ],
  fields: [
    {
      name: 'orderRank',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "coverImage", title: "Cover Image", type: "image" },
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
  ],
});